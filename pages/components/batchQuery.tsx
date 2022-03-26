import {Button, Table, Spinner,Form} from 'react-bootstrap';
import {useEffect, useState,ChangeEvent} from "react";
import { useCSVReader } from 'react-papaparse';
import styled from "styled-components";
import { ethers } from 'ethers';
import CsvDownloader from 'react-csv-downloader'

const ButtonBox = styled("div")`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .example{
      margin-left: 20px;
    }
    .rht{
      margin-right: 20px;
     
      button{
        white-space: nowrap!important;
      }
    }
  .querybtn,.query{
    margin-right: 20px;
  }
  @media(max-width: 1000px){
    .query,.example{
      margin-top: 20px;
    }
  }
`
const TableBox = styled.div`
    margin-top: 40px;
  .tableStyle{
    border-top: 1px solid #eee;
    color: #666666;
    th{
      height: 60px;
      line-height: 60px;
    }
    .first{
      display: flex;
      justify-content: center;
      align-items: stretch;
      .form-check-inline{
        margin-right: 0;
        display: flex;
        margin-top: 13px;
      }
    }
    td{
      line-height: 50px;
      word-break: break-all;
      &:nth-child(4){
       width: 30%;
      }
    }
    tr:nth-child(2n+1) td{
      background:rgba(255,255,255,0.3)!important;
      color: #666666!important;
    }
    tr:hover td{
      background:rgba(0,0,0,0.01)!important;
    }
  }
`
interface listObj {
    address:string
    index:number
    amount?:string
    checked?:boolean
}

export default function BatchQuery(){

    const { CSVReader } = useCSVReader();
    const [list,setList] = useState<listObj[]>([]);
    const [web3,setWeb3] = useState<any>();
    const [loading,setLoading] = useState<boolean[]>([])
    const [checkArr,setCheckArr] = useState<listObj[]>([])
    const [downloadArr,setDownloadArr] = useState<listObj[]>([])
    const [show,setShow] = useState<boolean>(false);

    useEffect(()=>{
        const provider = new ethers.providers.Web3Provider((window as any).ethereum)
        setWeb3(provider)
    },[])

    useEffect(()=>{
        const mapArr = list.filter(item=>item.checked === true);
        setCheckArr(mapArr)
    },[show,list])

    useEffect(()=>{
        if(!checkArr.length)return;
       const arr = JSON.parse(JSON.stringify(checkArr));
        arr.map((item:listObj)=>{
            delete item.checked
        })
        setDownloadArr(arr)
    },[checkArr])

    const query_balance = async () => {

        let arr:listObj[];
        let loadingArr: boolean[];
        if(checkArr.length){
            arr = [...checkArr];
            loadingArr = [...Array(list.length)].fill(true);
            list.map((item,index)=>{
                loadingArr[index] = item.checked as boolean;
            })
        }else{
            arr = [...list];
            loadingArr = [...Array(list.length)].fill(true);;
        }
        setLoading(loadingArr)
        for await (let item of arr){
            const objArr = [...list];
            let amount = await web3?.getBalance(item.address)
            const obj = arr.filter(obj=>obj.address ===item.address);
            obj[0].amount = ethers.utils.formatEther(amount.toString());
            setList(objArr)
        }
    };

    const UniqueArr = (objArr:listObj) =>{
        let obj:any ={};
        return (objArr as any).reduce((cur:listObj,next:listObj) => {
            obj[next.address] ? "" : obj[next.address] = true && (cur as any).push(next);
            return cur;
        },[])
    }
    const handleChange = (e:ChangeEvent) =>{
        const eventObj = e.target as HTMLInputElement;
        const index = Number(eventObj.value);
        list[index].checked = true;
        setShow(!show)
    }

    return <div>
        <ButtonBox>
            <CSVReader
                onUploadAccepted={(results: any) => {
                    // results.data.shift()

                    const arr = results.data.map((item:any)=>{
                        if(!ethers.utils.isAddress(item[0])) return null;
                        return {
                            address:item[0],
                            amount:null,
                            checked:false
                        }
                    })

                    const ArrAft = arr.filter((item:any) => item != null);
                    const ArrUni = UniqueArr(ArrAft);
                    const e = [...Array(ArrUni.length)].fill(false)
                    setLoading(e)
                    setList(ArrUni);
                }}

            >
                {({
                      getRootProps,
                  }: any) => (
                    <>
                        <div
                            {...getRootProps()}
                            className="rht"
                        >
                            <Button variant="flat" >
                               Import CSV
                            </Button>

                        </div>
                    </>
                )}
            </CSVReader>
            <Button variant="dark" onClick={()=>query_balance()} className="querybtn"> Query</Button>
            <div className="query">
                {
                    !!downloadArr.length &&<CsvDownloader
                        datas={downloadArr as any}
                        filename={`myWallets_${downloadArr[0]?.address}`}
                        extension=".csv"> <Button variant="dark">  Download</Button>
                    </CsvDownloader>
                }

            </div>


            <a className="example" href="/batch-query/example.csv">example(import)</a>


        </ButtonBox>
        <TableBox>
            <Table striped borderless hover className="tableStyle">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>index</th>
                        <th>Address</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {
                    list.map((item,index)=>
                        <tr key={index}>
                            <td>
                                <div className="first">
                                    <Form.Check
                                        inline
                                        type="checkbox"
                                        id={`default-checkbox_${index}`}
                                        value={index}
                                        name="selectValue"
                                        onChange={handleChange}
                                    />
                                </div>

                            </td>
                            <td>{index+1}</td>
                            <td>{item.address}</td>
                            <td>
                                {
                                    item.amount ==null && loading[index] && <Spinner animation="border" variant="dark" />
                                }
                                {item.amount}
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </TableBox>
    </div>
}