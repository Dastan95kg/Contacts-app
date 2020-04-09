import React from 'react';

const ListHeader = () => {
    return (
        <div className="list__header">
            <input type="text" placeholder="type to search..." />
            <div className="list__svg">
                <svg width="40" height="36.8" viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 65.2L30.1 60.3C11.9 44.2 0 33.35 0 20.05C0 9.19996 8.4 0.799957 19.25 0.799957C25.2 0.799957 31.15 3.59996 35 8.14996C38.85 3.59996 44.8 0.799957 50.75 0.799957C61.6 0.799957 70 9.19996 70 20.05C70 33.35 58.1 44.2 39.9 60.3L35 65.2Z" fill="#D32F2F" />
                </svg>
                <svg className="list__svg-sort" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M39.3332 40H0.666809C0.298767 40 0 39.7021 0 39.3332V0.666809C0 0.297852 0.298767 0 0.666809 0H39.3332C39.7012 0 40 0.297852 40 0.666809V39.3332C40 39.7021 39.7012 40 39.3332 40ZM1.33331 38.6667H38.6667V1.33331H1.33331V38.6667Z" fill="#D32F2F" />
                        <path d="M28.6667 33.3335C28.2986 33.3335 27.9999 33.0353 27.9999 32.6667V6.6666C27.9999 6.29794 28.2986 6.00009 28.6667 6.00009C29.0347 6.00009 29.3332 6.29794 29.3332 6.6666V32.6667C29.3332 33.0353 29.0347 33.3335 28.6667 33.3335Z" fill="#D32F2F" />
                        <path d="M28.6667 33.3334C28.4961 33.3334 28.3252 33.2681 28.1952 33.1381L22.862 27.8045C22.6013 27.5439 22.6013 27.1228 22.862 26.8618C23.122 26.6012 23.5446 26.6012 23.8047 26.8618L29.1379 32.1954C29.3988 32.4561 29.3988 32.8772 29.1379 33.1381C29.0079 33.2681 28.8373 33.3334 28.6667 33.3334Z" fill="#D32F2F" />
                        <path d="M28.6667 33.3334C28.4961 33.3334 28.3252 33.2681 28.1952 33.1381C27.9346 32.8772 27.9346 32.4561 28.1952 32.1954L33.5288 26.8618C33.7888 26.6012 34.2115 26.6012 34.4715 26.8618C34.7321 27.1228 34.7321 27.5439 34.4715 27.8045L29.1379 33.1381C29.0079 33.2681 28.8373 33.3334 28.6667 33.3334Z" fill="#D32F2F" />
                        <path d="M17.3334 22.6666H7.99988C7.63214 22.6666 7.33337 22.3687 7.33337 22.0001C7.33337 21.6314 7.63214 21.3333 7.99988 21.3333H17.3334C17.7014 21.3333 17.9999 21.6314 17.9999 22.0001C17.9999 22.3687 17.7014 22.6666 17.3334 22.6666Z" fill="#D32F2F" />
                        <path d="M17.3334 33.3334H7.99988C7.63214 33.3334 7.33337 33.0353 7.33337 32.6666C7.33337 32.298 7.63214 32.0001 7.99988 32.0001H17.3334C17.7014 32.0001 17.9999 32.298 17.9999 32.6666C17.9999 33.0353 17.7014 33.3334 17.3334 33.3334Z" fill="#D32F2F" />
                        <path d="M7.99991 33.3334C7.84397 33.3334 7.68802 33.2794 7.56138 33.1687C7.28397 32.926 7.2559 32.5046 7.49882 32.2281L16.832 21.5613C17.0746 21.2839 17.4961 21.2561 17.7726 21.4981C18.05 21.7407 18.078 22.1618 17.8354 22.4386L8.50193 33.1055C8.37009 33.2565 8.18546 33.3334 7.99991 33.3334Z" fill="#D32F2F" />
                        <path d="M7.33279 17.9999C7.23269 17.9999 7.13076 17.9773 7.03463 17.93C6.70535 17.7652 6.57198 17.3648 6.73678 17.0353L12.07 6.36877C12.2348 6.03948 12.6352 5.90734 12.9648 6.07061C13.2941 6.23541 13.4275 6.6361 13.2627 6.96538L7.92941 17.6322C7.81283 17.8653 7.57723 17.9999 7.33279 17.9999Z" fill="#D32F2F" />
                        <path d="M18.0008 17.9998C17.756 17.9998 17.5208 17.8652 17.4039 17.6312L12.0706 6.96466C11.9061 6.63537 12.0392 6.23468 12.3688 6.06988C12.6981 5.906 13.0981 6.03784 13.2632 6.36804L18.5968 17.0345C18.7613 17.3638 18.6279 17.7645 18.2986 17.9293C18.2025 17.9772 18.1006 17.9998 18.0008 17.9998Z" fill="#D32F2F" />
                        <path d="M17.3334 13.9999H7.99988C7.63214 13.9999 7.33337 13.7021 7.33337 13.3334C7.33337 12.9648 7.63214 12.6666 7.99988 12.6666H17.3334C17.7014 12.6666 17.9999 12.9648 17.9999 13.3334C17.9999 13.7021 17.7014 13.9999 17.3334 13.9999Z" fill="#D32F2F" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M7.33279 33.3334C7.23269 33.3334 7.13076 33.3106 7.03463 33.2633C6.70535 33.0988 6.57198 32.6981 6.73678 32.3688L12.07 21.702C12.2348 21.3727 12.6352 21.2405 12.9648 21.4041C13.2941 21.5686 13.4275 21.9693 13.2627 22.2986L7.92941 32.9654C7.81283 33.1986 7.57723 33.3334 7.33279 33.3334Z" fill="#212121" />
                        <path d="M18.0008 33.3334C17.756 33.3334 17.5208 33.1985 17.4039 32.9648L12.0706 22.298C11.9061 21.9687 12.0392 21.568 12.3688 21.4032C12.6975 21.2393 13.0981 21.3721 13.2632 21.7013L18.5968 32.3678C18.7613 32.6974 18.6279 33.0981 18.2986 33.2626C18.2025 33.3105 18.1006 33.3334 18.0008 33.3334Z" fill="#212121" />
                        <path d="M17.3334 29.3332H7.99988C7.63214 29.3332 7.33337 29.0353 7.33337 28.6667C7.33337 28.298 7.63214 27.9999 7.99988 27.9999H17.3334C17.7014 27.9999 17.9999 28.298 17.9999 28.6667C17.9999 29.0353 17.7014 29.3332 17.3334 29.3332Z" fill="#212121" />
                        <path d="M39.3332 40H0.666809C0.298767 40 0 39.7021 0 39.3332V0.666809C0 0.297852 0.298767 0 0.666809 0H39.3332C39.7012 0 40 0.297852 40 0.666809V39.3332C40 39.7021 39.7012 40 39.3332 40ZM1.33331 38.6667H38.6667V1.33331H1.33331V38.6667Z" fill="#212121" />
                        <path d="M28.6667 33.3334C28.2986 33.3334 27.9999 33.0353 27.9999 32.6666V6.66656C27.9999 6.29791 28.2986 6.00006 28.6667 6.00006C29.0347 6.00006 29.3332 6.29791 29.3332 6.66656V32.6666C29.3332 33.0353 29.0347 33.3334 28.6667 33.3334Z" fill="#212121" />
                        <path d="M34 12.6666C33.8294 12.6666 33.6588 12.6013 33.5288 12.4713L28.1952 7.13806C27.9346 6.87744 27.9346 6.45599 28.1952 6.19537C28.4552 5.93475 28.8779 5.93475 29.1379 6.19537L34.4715 11.5286C34.7321 11.7892 34.7321 12.2107 34.4715 12.4713C34.3415 12.6013 34.1706 12.6666 34 12.6666Z" fill="#212121" />
                        <path d="M23.3335 12.6666C23.1626 12.6666 22.992 12.6013 22.862 12.4713C22.6013 12.2107 22.6013 11.7892 22.862 11.5286L28.1952 6.19537C28.4552 5.93475 28.8779 5.93475 29.1379 6.19537C29.3988 6.45599 29.3988 6.87744 29.1379 7.13806L23.8047 12.4713C23.6747 12.6013 23.5041 12.6666 23.3335 12.6666Z" fill="#212121" />
                        <path d="M16.6666 7.33337H7.99988C7.63214 7.33337 7.33337 7.03522 7.33337 6.66656C7.33337 6.29791 7.63214 6.00006 7.99988 6.00006H16.6666C17.0346 6.00006 17.3334 6.29791 17.3334 6.66656C17.3334 7.03522 17.0346 7.33337 16.6666 7.33337Z" fill="#212121" />
                        <path d="M16.6666 17.9999H7.99988C7.63214 17.9999 7.33337 17.702 7.33337 17.3334C7.33337 16.9647 7.63214 16.6666 7.99988 16.6666H16.6666C17.0346 16.6666 17.3334 16.9647 17.3334 17.3334C17.3334 17.702 17.0346 17.9999 16.6666 17.9999Z" fill="#212121" />
                        <path d="M7.99987 17.9999C7.85186 17.9999 7.70324 17.9513 7.57995 17.8506C7.294 17.6181 7.25067 17.1978 7.4826 16.9125L16.1493 6.24601C16.3812 5.96006 16.8014 5.91794 17.0874 6.14865C17.3733 6.3812 17.4167 6.80143 17.1847 7.08676L8.51806 17.7533C8.38592 17.9159 8.19335 17.9999 7.99987 17.9999Z" fill="#212121" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default ListHeader;