import { Footer } from 'flowbite-react';
import React from 'react';

const FooterPart = () => {
    return (
        <Footer className='footer-custom-clr' bgDark={true}>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 lg:px-36 md:grid-cols-5">
                    <div>
                        <Footer.Title title="ProfessionHub"/>
                        <Footer.LinkGroup col={true}>
                            <p>
                            There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                            </p>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Company" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                About Us
                            </Footer.Link>
                            <Footer.Link href="#">
                            Work
                            </Footer.Link>
                            <Footer.Link href="#">
                            Latest News
                            </Footer.Link>
                            <Footer.Link href="#">
                            Careers
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Product" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                Prototype
                            </Footer.Link>
                            <Footer.Link href="#">
                                Plans & Pricing
                            </Footer.Link>
                            <Footer.Link href="#">
                                Customers
                            </Footer.Link>
                            <Footer.Link href="#">
                            Integrations
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Support" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                            Help Desk
                            </Footer.Link>
                            <Footer.Link href="#">
                            Sales
                            </Footer.Link>
                            <Footer.Link href="#">
                            Become a Partner
                            </Footer.Link>
                            <Footer.Link href="#">
                            Developers
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Contact" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                524 Broadway , NYC
                            </Footer.Link>
                            <Footer.Link href="#">
                                +1 777 - 978 - 5570
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <hr />
                <div className="w-full py-6 px-6 lg:px-36 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="ProfessionHub. All Rights Reserved"
                        year={2023}
                    />
                </div>
            </div>
        </Footer>
    );
};

export default FooterPart;