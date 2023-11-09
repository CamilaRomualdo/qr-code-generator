import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import styled from 'styled-components'

export default function QrCode() {
    const [url, setUrl] = useState("")
    const qrRef = useRef<HTMLDivElement>(null);
    
    const generateQRCode = (evt: React.FormEvent) => {
        evt.preventDefault();
        setUrl("");
    }

    const downloadQRCode = () => {
        if (qrRef.current) {
            const svgElement = qrRef.current as unknown as SVGSVGElement;
            const svgData = new XMLSerializer().serializeToString(svgElement);
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);

            const link = document.createElement('a');
            link.href = url;
            link.download = "QRCode.svg"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url); 
        }
    };

    return (
        <>
            <form className="form" onSubmit={generateQRCode} >
                <Input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com"
                />
                <Button type="submit">Clear</Button>
            </form>
            <QRCodeWrapper ref={qrRef}>
                <QRCodeSVG
                    value={url ? url : 'https://example.com'} 
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level="H"
                    size={300}
                />
            </QRCodeWrapper>
            {url && <DownloadButton onClick={downloadQRCode}>Download SVG</DownloadButton>}
        </>
    )
}

const Input = styled.input`
    height: 30px;
    padding: 0 3px;
    width: 85%;
` 

const Button = styled.button`
    background-color: #30BCED;
    border: 1px solid #30BCED;
    border-radius: 3px;
    color: #FFFAFF;
    cursor: pointer;
    font-size: 14px;
    height: 30px;
    margin-left: 5px;
    text-align: center;
    width: 70px;

    &:hover {
        background-color: #74c4e1;
    }
` 

const DownloadButton = styled.button`
    background-color: #28b448;
    border: 1px solid #28b448;
    border-radius: 3px;
    color: #FFFAFF;
    cursor: pointer;
    font-size: 14px;
    height: 30px;
    margin-top: 30px;
    text-align: center;
    width: 130px;

    &:hover {
        background-color: #51bb6a;
    }
` 

const QRCodeWrapper = styled.div`
    margin-top: 30px;   
    text-align: center;
` 