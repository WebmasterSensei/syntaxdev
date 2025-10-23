import { DesktopIcon, MobileIcon } from "@radix-ui/react-icons"
import { BellIcon, Share2Icon } from "lucide-react"

import { cn } from "@/lib/utils"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"


const files = [
    {
        name: "bitcoin.pdf",
        body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
    },
    {
        name: "finances.xlsx",
        body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    },
    {
        name: "logo.svg",
        body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    },
    {
        name: "keys.gpg",
        body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    },
    {
        name: "seed.txt",
        body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    },
]

const features = [
    {
        Icon: DesktopIcon,
        name: "Bank Reconcilation System",
        description: "This will recon all of the banks statement",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1 bg-linear-to-br from-blue-950 via-slate-950 to-blue-950",
        background: (
            <>
                <img
                    className="absolute w-full h-full "
                    src="/projects/bankrs.PNG"
                    alt="Background"
                />

                <div className="absolute inset-0 bg-slate-950/20 hover:bg-transparent" />

            </>
        ),
    },
    {
        Icon: DesktopIcon,
        name: "Gift Check",
        description: "Monitoring and creating barcodes and verifieng",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2 bg-linear-to-br from-blue-950 via-slate-950 to-blue-950 ",
        background: (
            <>
                <img className="absolute w-full h-full" src="/projects/gc.PNG" alt="" />
                <div className="absolute inset-0 bg-slate-950/50 hover:bg-transparent" />
            </>
        ),
    },
    {
        Icon: DesktopIcon,
        name: "Stock Withdrawal Advice",
        description: "Provides guidance and approval details for store stock withdrawals, ensuring proper authorization and tracking.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2 bg-linear-to-br from-blue-950 via-slate-950 to-blue-950",
        background: (
            <>
                <img className="absolute w-full h-full" src="/projects/swa.png" alt="" />
                <div className="absolute inset-0 bg-slate-950/50 hover:bg-transparent" />
            </>
        ),
    },
    {
        Icon: DesktopIcon,
        name: "Check Clearing and Monitoring",
        description: "It clears the checks.",
        className: "col-span-3 lg:col-span-1 bg-linear-to-br from-blue-950 via-slate-950 to-blue-950",
        href: "#",
        cta: "Learn more",
        background: (
            <>
                <img className="absolute w-full h-full bg-cover" src="/projects/ccm.PNG" alt="" />
                <div className="absolute inset-0 bg-slate-950/50 hover:bg-transparent" />
            </>
        ),
    },
    {
        Icon: DesktopIcon,
        name: "Bad Order & Near Expire",
        description: "Monitoring Near Expire Stock and Bad Order Stocks",
        className: "col-span-3 lg:col-span-1 bg-linear-to-br from-blue-950 via-slate-950 to-blue-950",
        href: "#",
        cta: "Learn more",
        background: (
            <>
                <img className="absolute w-full h-full bg-cover" src="/projects/bns.PNG" alt="" />
                <div className="absolute inset-0 bg-slate-950/50 hover:bg-transparent" />
            </>
        ),
    },
    {
        Icon: MobileIcon,
        name: "Alturush Mobile",
        description: "You ordered We delivered!",
        className: "col-span-3 lg:col-span-1 bg-linear-to-br from-blue-950 via-slate-950 to-blue-950",
        href: "#",
        cta: "Learn more",
        background: (
            <>
                <img className="absolute w-full h-full bg-cover" src="/projects/altu.PNG" alt="" />
                <div className="absolute inset-0 bg-slate-950/50 hover:bg-transparent" />
            </>
        ),
    },
    {
        Icon: DesktopIcon,
        name: "Variance",
        description: "Reconcilation of amount",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2 bg-linear-to-br from-blue-950 via-slate-950 to-blue-950",
        background: (
            <>
                <img className="absolute w-full h-full" src="/projects/var.PNG" alt="" />
                <div className="absolute inset-0 bg-slate-950/50 hover:bg-transparent" />
            </>
        ),
    },
]

export function BentoComponent() {
    return (
        <BentoGrid>
            {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
        </BentoGrid>
    )
}
