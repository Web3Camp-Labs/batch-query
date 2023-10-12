import {Button, Table, Spinner,Form,FloatingLabel,Alert} from 'react-bootstrap';
import {useEffect, useState} from "react";
import { useCSVReader } from 'react-papaparse';
import styled from "styled-components";
import { ethers } from 'ethers';
import CsvDownloader from 'react-csv-downloader';
// import Erc20ABI from "../abi/erc20.abi.json";
import Erc20ABI from "../abi/MockErc20.json";
import { Contract, Provider } from 'ethers-multicall';


const ButtonBox = styled("div")`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .example{
      margin: 0 20px;
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
    .query,.example,.switchBox{
      margin-top: 20px;
    }
    .example{
      margin-left: 0;
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

const FloatBox = styled(FloatingLabel)`
  width: 100%;
  margin-top: 20px;
`

const AlertBox = styled(Alert)`
  margin-top: 20px;
`

export default function BatchQuery(){

    const { CSVReader } = useCSVReader();
    const [list,setList] = useState([]);
    const [web3,setWeb3] = useState();
    const [loading,setLoading] = useState([])
    const [checkArr,setCheckArr] = useState([])
    const [downloadArr,setDownloadArr] = useState([])
    const [show,setShow] = useState(false);
    const [showType,setShowType] = useState(false);
    const [showErr,setShowErr] = useState(false);
    const [TokenAddress,setTokenAddress] = useState('');
    const [rvAddress,setRVAddress] = useState('');
    const [Tips,setTips] = useState('');

    useEffect(()=>{
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            setWeb3(provider)
        }
    },[])

    useEffect(()=>{
        const mapArr = list.filter(item=>item.checked === true);
        setCheckArr(mapArr)
    },[show,list])

    useEffect(()=>{
        if(!checkArr.length)return;
       const arr = JSON.parse(JSON.stringify(checkArr));
        arr.map((item)=>{
            delete item.checked
        })
        setDownloadArr(arr)
    },[checkArr])


    const query_balance = async() => {
        if(!window.ethereum){
            setTips('Please install metamask');
            setShowErr(true)
        }
        if(!list.length){
            setTips('Please Import CSV ');
            setShowErr(true)
            setTimeout(()=>{
                setShowErr(false)
            },2000)
        }
        if(showType && TokenAddress ===""){
            setShowErr(true)
            setTips('ERC20 address is required');
            setTimeout(()=>{
                setShowErr(false)
            },2000)
            return;
        }
        if(showType && !ethers.utils.isAddress(TokenAddress)){
            setShowErr(true)
            setTips('ERC20 address is not correct');
            setTimeout(()=>{
                setShowErr(false)
            },2000)
            return;
        }
        let arr;
        let loadingArr;
        if(checkArr.length){
            arr = [...checkArr];
            loadingArr = [...Array(list.length)].fill(true);
            list.map((item,index)=>{
                loadingArr[index] = item.checked;
            })
        }else{
            arr = [...list];
            loadingArr = [...Array(list.length)].fill(true);
        }
        setLoading(loadingArr)
        if(showType){
            await queryERC20(arr).then((data)=>{
                console.log("=======",data)
            })
        }else{
            await queryNative(arr).then((data)=>{
                console.log("=======",data)
            });
        }

    };
    const queryERC20 = async (arr) =>{
        const contract = new Contract(TokenAddress, Erc20ABI);
        const FormatAddress = [];
        arr.map((item,index)=>{
            FormatAddress.push(
                contract.balanceOf(item.address)
            )
        })
        const ethcallProvider = new Provider(web3);
        await ethcallProvider.init();
        const amountList = await ethcallProvider.all(FormatAddress)
            arr.map((item,index)=>{
                let amount = amountList[index].toString();
                item.amount = ethers.utils.formatEther(amount);
            });
        const loadingArr = [...Array(list.length)].fill(false);
        setLoading(loadingArr)
        setList(arr)
    }

    const queryNative = async (arr) =>{
        for await (let item of arr){
            const objArr = [...arr];
            let amount = await web3?.getBalance(item.address)
            const objItem = arr.filter(obj=>obj.address ===item.address);
            objItem[0].amount = ethers.utils.formatEther(amount.toString());
            setList(objArr)
        }
    }

    const handleType = () =>{
        setShowType(!showType)
        setCheckArr([])
        setDownloadArr([])
        setLoading([])
        setList([])
        setShowErr(false);
    }

    const UniqueArr = (objArr) =>{
        let obj ={};
        return objArr.reduce((cur,next) => {
            // obj[next.address] ? "" : obj[next.address] = true && cur.push(next);
            if(!obj[next.address]){
                obj[next.address] = true;
                cur.push(next)
            }
            return cur;
        },[])
    }
    const handleChange = (e) =>{
        const eventObj = e.target;
        const index = Number(eventObj.value);
        list[index].checked = true;
        setShow(!show)
    }

    const handleInput= (e) => {
        const eventObj = e.target;
        setTokenAddress(eventObj.value)
    }
    const handleInputReceiver= (e) => {
        const eventObj = e.target;
        setRVAddress(eventObj.value)
    }

    const tranferAll = async() =>{
        if(showType && TokenAddress ===""){
            setShowErr(true)
            setTips('ERC20 address is required');
            setTimeout(()=>{
                setShowErr(false)
            },2000)
            return;
        }


        let newArr =[];
        setShowErr(false);
        let isAddr = ethers.utils.isAddress(rvAddress);
        if(!isAddr) {
            setTips("Receiver address is error")
            setShowErr(true);
            return;
        }
        await query_balance()

        console.log(list)

        newArr = list.filter((item,index)=> {
            if(item.privateKey && Number(item.amount)){
                item.pos = index;
            }
            return item.privateKey && Number(item.amount)
        })
        if(!newArr.length){
            setTips("There is no balance in the account")
            setShowErr(true);
            return;
        }

        if(!showType){
            transferArr(newArr)
        }else if(showType && TokenAddress){
            transferERC20(newArr)
        }
    }



    const transferERC20 = async(newArr) =>{

        await window.ethereum.enable();
        console.log(newArr)




        for await (let item of newArr){
            const arr = [...list];
            const wallet = new ethers.Wallet(item.privateKey, web3);
            const amountAft = ethers.utils.parseEther(item.amount);
            console.log(amountAft.toString())

            const contract = new ethers.Contract(TokenAddress, Erc20ABI,web3);

            const amount = ethers.utils.parseUnits('1');
            try{
                const transferTx = await contract.connect(wallet).transfer(rvAddress, amount);
                const rt = await transferTx.wait();
                console.log('Transaction sent:', transferTx,rt);
                    arr[item.pos].status = "Success"
                    setList(arr)
            }catch (e) {
                    arr[item.pos].status = "Failed"
                    console.error(e)
                    setList(arr)
            }

        }

    }

    const transferArr = async (newArr) =>{

        await window.ethereum.enable();
        console.log(newArr)
        for await (let item of newArr){
            const arr = [...list];
            const wallet = new ethers.Wallet(item.privateKey, web3);
            const amountAft = ethers.utils.parseEther(item.amount);

            const gasPrice = await web3.getGasPrice();
            const gasLimit = "210000";

            const gasFee = gasPrice.mul(gasLimit);
            console.log(gasPrice,gasPrice.toString(),gasFee)

            const amountToSend= amountAft.sub(gasFee);


            const transaction = {
                to: rvAddress,
                value: amountToSend,
            };

            try{
                const signedTransaction = await wallet.sendTransaction(transaction);
                const rt = await signedTransaction.wait();
                arr[item.pos].status = "Success"
                setList(arr)
                console.log('Transaction hash:', rt);
            }catch (e){
                arr[item.pos].status = "Failed"
                console.error(e)
                setList(arr)
            }
        }

    }




    return <div>
        <ButtonBox>
            <CSVReader
                onUploadAccepted={(results) => {
                    // results.data.shift()

                    const arr = results.data.map((item)=>{
                        if(!ethers.utils.isAddress(item[0])) return null;
                        return {
                            address:item[0],
                            privateKey:item[1],
                            amount:null,
                            checked:false
                        }
                    })

                    const ArrAft = arr.filter((item) => item != null);
                    const ArrUni = UniqueArr(ArrAft);
                    const e = [...Array(ArrUni.length)].fill(false)
                    setLoading(e)
                    setList(ArrUni);
                }}

            >
                {({
                      getRootProps,
                  }) => (
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
            <Button variant="dark" onClick={()=>tranferAll()} className="querybtn"> Transfer</Button>

            <div className="query">
                {
                    !!downloadArr.length &&<CsvDownloader
                        datas={downloadArr}
                        filename={`myWallets_${showType?'ERC20':'native'}_${downloadArr[0]?.address}`}
                        extension=".csv"> <Button variant="dark">  Download</Button>
                    </CsvDownloader>
                }

            </div>


            <a className="example" href="/batch-query/example.csv">example(import)</a>
            <div className="switchBox">
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Native / ERC20"
                    checked={showType}
                    onChange={()=>handleType()}
                />
            </div>

        </ButtonBox>

        {
            showType &&<div>
                <FloatBox
                    controlId="floatingInput"
                    label="Token Address"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Token Address" onChange={handleInput}/>
                </FloatBox>
            </div>
        }
        {
            showErr &&<AlertBox  variant='danger'>
                {Tips}
            </AlertBox>
        }
        <div>
            <FloatBox
                controlId="floatingInput"
                label="Receiver Address"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="Receiver Address" onChange={handleInputReceiver}/>
            </FloatBox>
        </div>

        <TableBox>
            <Table striped borderless hover className="tableStyle">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>index</th>
                        <th>Address</th>
                        <th>Amount</th>
                        <th>Status</th>
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
                            <td>
                                {item.pos != null  ? (item.status ? item.status:<Spinner animation="border" variant="dark" />) : "" }
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </TableBox>
    </div>
}
