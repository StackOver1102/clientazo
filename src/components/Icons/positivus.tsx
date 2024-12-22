import { forwardRef } from "react";

export const IconPositivus = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#000"
        viewBox="0 0 36 36"
        {...{ ref, ...props }}
      >
        <path
          style={{
            fill: "inherit",
          }}
          d="M17.999 5.535l17.6-5.186L30.465 18 35.6 35.601l-17.601-5.136L.348 35.602l5.185-17.6L.348.348l17.65 5.186z"
        ></path>
      </svg>
    );
  }
);

export const IconPositivusTypography = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <svg
        width="172"
        height="29"
        viewBox="0 0 172 29"
        fill="#000"
        xmlns="http://www.w3.org/2000/svg"
        {...{ ref, ...props }}
      >
        <path
          d="M0.919922 28V0H12.0399C13.7466 0 15.2666 0.346667 16.5999 1.04C17.9599 1.70667 19.0133 2.66667 19.7599 3.92C20.5333 5.14667 20.9199 6.62667 20.9199 8.36V8.88C20.9199 10.6133 20.5199 12.1067 19.7199 13.36C18.9466 14.6133 17.8933 15.5733 16.5599 16.24C15.2266 16.9067 13.7199 17.24 12.0399 17.24H5.23992V28H0.919922ZM5.23992 13.32H11.5999C13.1199 13.32 14.3333 12.92 15.2399 12.12C16.1466 11.32 16.5999 10.2267 16.5999 8.84V8.44C16.5999 7.02667 16.1466 5.92 15.2399 5.12C14.3333 4.32 13.1199 3.92 11.5999 3.92H5.23992V13.32Z"
          fill="inherit"
        />
        <path
          d="M33.8346 28.56C31.8613 28.56 30.1013 28.16 28.5546 27.36C27.0346 26.5333 25.8346 25.36 24.9546 23.84C24.0746 22.32 23.6346 20.52 23.6346 18.44V17.84C23.6346 15.76 24.0746 13.9733 24.9546 12.48C25.8346 10.96 27.0346 9.78667 28.5546 8.96C30.1013 8.13333 31.8613 7.72 33.8346 7.72C35.8079 7.72 37.5679 8.13333 39.1146 8.96C40.6613 9.78667 41.8746 10.96 42.7546 12.48C43.6346 13.9733 44.0746 15.76 44.0746 17.84V18.44C44.0746 20.52 43.6346 22.32 42.7546 23.84C41.8746 25.36 40.6613 26.5333 39.1146 27.36C37.5679 28.16 35.8079 28.56 33.8346 28.56ZM33.8346 24.88C35.6479 24.88 37.1146 24.3067 38.2346 23.16C39.3813 21.9867 39.9546 20.3733 39.9546 18.32V17.96C39.9546 15.9067 39.3946 14.3067 38.2746 13.16C37.1546 11.9867 35.6746 11.4 33.8346 11.4C32.0479 11.4 30.5813 11.9867 29.4346 13.16C28.3146 14.3067 27.7546 15.9067 27.7546 17.96V18.32C27.7546 20.3733 28.3146 21.9867 29.4346 23.16C30.5813 24.3067 32.0479 24.88 33.8346 24.88Z"
          fill="inherit"
        />
        <path
          d="M57.284 28.56C54.7773 28.56 52.6973 28 51.044 26.88C49.3907 25.76 48.3773 24.0667 48.004 21.8L51.844 20.88C52.0573 21.9733 52.4173 22.84 52.924 23.48C53.4307 24.12 54.0573 24.5733 54.804 24.84C55.5773 25.1067 56.404 25.24 57.284 25.24C58.5907 25.24 59.5906 24.9867 60.284 24.48C61.004 23.9733 61.364 23.32 61.364 22.52C61.364 21.72 61.0307 21.1333 60.364 20.76C59.6973 20.3867 58.7107 20.08 57.404 19.84L56.044 19.6C54.7107 19.36 53.4973 19.0133 52.404 18.56C51.3106 18.1067 50.444 17.48 49.804 16.68C49.164 15.88 48.844 14.8533 48.844 13.6C48.844 11.7333 49.5373 10.2933 50.924 9.28C52.3106 8.24 54.1506 7.72 56.444 7.72C58.6573 7.72 60.4706 8.22667 61.884 9.24C63.324 10.2267 64.2573 11.5733 64.684 13.28L60.844 14.36C60.604 13.16 60.0973 12.32 59.324 11.84C58.5506 11.3333 57.5906 11.08 56.444 11.08C55.324 11.08 54.444 11.2933 53.804 11.72C53.164 12.12 52.844 12.6933 52.844 13.44C52.844 14.24 53.1507 14.8267 53.764 15.2C54.404 15.5733 55.2573 15.8533 56.324 16.04L57.724 16.28C59.1373 16.52 60.4306 16.8533 61.604 17.28C62.7773 17.7067 63.6973 18.32 64.364 19.12C65.0573 19.92 65.404 20.9867 65.404 22.32C65.404 24.2933 64.6707 25.8267 63.204 26.92C61.7373 28.0133 59.764 28.56 57.284 28.56Z"
          fill="inherit"
        />
        <path
          d="M70.2196 28V8.28H74.3396V28H70.2196ZM72.2996 5.6C71.4996 5.6 70.8196 5.34667 70.2596 4.84C69.7263 4.30667 69.4596 3.62667 69.4596 2.8C69.4596 1.97333 69.7263 1.30667 70.2596 0.800001C70.8196 0.266667 71.4996 0 72.2996 0C73.1263 0 73.8063 0.266667 74.3396 0.800001C74.8729 1.30667 75.1396 1.97333 75.1396 2.8C75.1396 3.62667 74.8729 4.30667 74.3396 4.84C73.8063 5.34667 73.1263 5.6 72.2996 5.6Z"
          fill="inherit"
        />
        <path
          d="M87.854 28C86.654 28 85.694 27.64 84.974 26.92C84.2806 26.2 83.934 25.24 83.934 24.04V11.76H78.494V8.28H83.934V1.76H88.054V8.28H93.934V11.76H88.054V23.32C88.054 24.12 88.4273 24.52 89.174 24.52H93.294V28H87.854Z"
          fill="inherit"
        />
        <path
          d="M98.7743 28V8.28H102.894V28H98.7743ZM100.854 5.6C100.054 5.6 99.3743 5.34667 98.8143 4.84C98.281 4.30667 98.0143 3.62667 98.0143 2.8C98.0143 1.97333 98.281 1.30667 98.8143 0.800001C99.3743 0.266667 100.054 0 100.854 0C101.681 0 102.361 0.266667 102.894 0.800001C103.428 1.30667 103.694 1.97333 103.694 2.8C103.694 3.62667 103.428 4.30667 102.894 4.84C102.361 5.34667 101.681 5.6 100.854 5.6Z"
          fill="inherit"
        />
        <path
          d="M113.569 28L106.929 8.28H111.289L116.529 24.96H117.169L122.409 8.28H126.769L120.129 28H113.569Z"
          fill="inherit"
        />
        <path
          d="M138.326 28.36C136.833 28.36 135.5 28.0267 134.326 27.36C133.153 26.6933 132.233 25.7467 131.566 24.52C130.9 23.2933 130.566 21.8267 130.566 20.12V8.28H134.686V19.84C134.686 21.5467 135.113 22.8133 135.966 23.64C136.82 24.44 138.006 24.84 139.526 24.84C141.206 24.84 142.553 24.28 143.566 23.16C144.606 22.0133 145.126 20.3733 145.126 18.24V8.28H149.246V28H145.206V25.04H144.566C144.193 25.84 143.526 26.6 142.566 27.32C141.606 28.0133 140.193 28.36 138.326 28.36Z"
          fill="inherit"
        />
        <path
          d="M163.417 28.56C160.91 28.56 158.83 28 157.177 26.88C155.523 25.76 154.51 24.0667 154.137 21.8L157.977 20.88C158.19 21.9733 158.55 22.84 159.057 23.48C159.563 24.12 160.19 24.5733 160.937 24.84C161.71 25.1067 162.537 25.24 163.417 25.24C164.723 25.24 165.723 24.9867 166.417 24.48C167.137 23.9733 167.497 23.32 167.497 22.52C167.497 21.72 167.163 21.1333 166.497 20.76C165.83 20.3867 164.843 20.08 163.537 19.84L162.177 19.6C160.843 19.36 159.63 19.0133 158.537 18.56C157.443 18.1067 156.577 17.48 155.937 16.68C155.297 15.88 154.977 14.8533 154.977 13.6C154.977 11.7333 155.67 10.2933 157.057 9.28C158.443 8.24 160.283 7.72 162.577 7.72C164.79 7.72 166.603 8.22667 168.017 9.24C169.457 10.2267 170.39 11.5733 170.817 13.28L166.977 14.36C166.737 13.16 166.23 12.32 165.457 11.84C164.683 11.3333 163.723 11.08 162.577 11.08C161.457 11.08 160.577 11.2933 159.937 11.72C159.297 12.12 158.977 12.6933 158.977 13.44C158.977 14.24 159.283 14.8267 159.897 15.2C160.537 15.5733 161.39 15.8533 162.457 16.04L163.857 16.28C165.27 16.52 166.563 16.8533 167.737 17.28C168.91 17.7067 169.83 18.32 170.497 19.12C171.19 19.92 171.537 20.9867 171.537 22.32C171.537 24.2933 170.803 25.8267 169.337 26.92C167.87 28.0133 165.897 28.56 163.417 28.56Z"
          fill="inherit"
        />
      </svg>
    );
  }
);
