<script setup lang="ts">
import {useContractsStore} from '@/stores/contracts.ts';
import {onMounted} from 'vue';

/*Global state*/
const contractsStore = useContractsStore();

/*Callbacks*/
onMounted(() => {
  contractsStore.updateFirstSign(!!sessionStorage.getItem('firstSign'));
  contractsStore.connectMobile();
  contractsStore.checkConnection();
  contractsStore.getEstimatedGas();
});
</script>

<template>
  <div class="home">
    <div class="home__box">
      <div class="home__box--title-wrap">
        <h1 class="home__box--title">NAKA Web Wallet</h1>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.2744 2.89074L26.6952 15.9319L29.9642 8.2463L44.2744 2.89074Z"
            fill="#E17726"
          />
          <path
            d="M3.7258 2.89074L21.1485 16.0536L18.0361 8.2463L3.7258 2.89074Z"
            fill="#E27625"
          />
          <path
            d="M37.9454 33.1296L33.268 40.2935L43.2835 43.0583L46.1525 33.2861L37.9454 33.1296Z"
            fill="#E27625"
          />
          <path
            d="M1.8653 33.2861L4.71692 43.0583L14.715 40.2935L10.055 33.1296L1.8653 33.2861Z"
            fill="#E27625"
          />
          <path
            d="M14.1763 21.0275L11.3942 25.2354L21.3053 25.6875L20.975 14.9938L14.1763 21.0275Z"
            fill="#E27625"
          />
          <path
            d="M33.8245 21.027L26.9215 14.8716L26.6954 25.687L36.6066 25.2349L33.8245 21.027Z"
            fill="#E27625"
          />
          <path
            d="M14.715 40.2935L20.7138 37.3889L15.5496 33.3548L14.715 40.2935Z"
            fill="#E27625"
          />
          <path
            d="M27.2865 37.3889L33.268 40.2935L32.4507 33.3548L27.2865 37.3889Z"
            fill="#E27625"
          />
          <path
            d="M33.268 40.2935L27.2865 37.3889L27.7731 41.2837L27.721 42.9356L33.268 40.2935Z"
            fill="#D5BFB2"
          />
          <path
            d="M14.715 40.2935L20.279 42.9356L20.2443 41.2837L20.7138 37.3889L14.715 40.2935Z"
            fill="#D5BFB2"
          />
          <path
            d="M20.3834 30.7819L15.4104 29.3213L18.9228 27.7042L20.3834 30.7819Z"
            fill="#233447"
          />
          <path
            d="M27.6168 30.7819L29.0774 27.7042L32.6072 29.3213L27.6168 30.7819Z"
            fill="#233447"
          />
          <path
            d="M14.715 40.2935L15.584 33.129L10.0546 33.2855L14.715 40.2935Z"
            fill="#CC6228"
          />
          <path
            d="M32.4156 33.129L33.268 40.2935L37.9449 33.2855L32.4156 33.129Z"
            fill="#CC6228"
          />
          <path
            d="M36.6066 25.2349L26.6954 25.687L27.6168 30.7819L29.0774 27.7042L32.6072 29.3213L36.6066 25.2349Z"
            fill="#CC6228"
          />
          <path
            d="M15.4104 29.3213L18.9228 27.7042L20.3834 30.7819L21.3053 25.6875L11.3942 25.2354L15.4104 29.3213Z"
            fill="#CC6228"
          />
          <path
            d="M11.3942 25.2354L15.5496 33.3548L15.4104 29.3213L11.3942 25.2354Z"
            fill="#E27525"
          />
          <path
            d="M32.6072 29.3213L32.4507 33.3548L36.6066 25.2349L32.6072 29.3213Z"
            fill="#E27525"
          />
          <path
            d="M21.3053 25.6875L20.3834 30.7819L21.5483 36.7982L21.8091 28.8692L21.3053 25.6875Z"
            fill="#E27525"
          />
          <path
            d="M26.6954 25.687L26.2081 28.8518L26.4515 36.7982L27.6168 30.7819L26.6954 25.687Z"
            fill="#E27525"
          />
          <path
            d="M27.6168 30.7819L26.4515 36.7982L27.2865 37.3889L32.4507 33.3548L32.6072 29.3213L27.6168 30.7819Z"
            fill="#F5841F"
          />
          <path
            d="M15.4104 29.3213L15.5496 33.3548L20.7138 37.3889L21.5483 36.7982L20.3834 30.7819L15.4104 29.3213Z"
            fill="#F5841F"
          />
          <path
            d="M27.721 42.9356L27.7731 41.2837L27.3211 40.9015H20.6789L20.2443 41.2837L20.279 42.9356L14.715 40.2935L16.6623 41.8926L20.6093 44.6226H27.3732L31.3377 41.8926L33.268 40.2935L27.721 42.9356Z"
            fill="#C0AC9D"
          />
          <path
            d="M27.2865 37.3889L26.4515 36.7982H21.5483L20.7138 37.3889L20.2443 41.2837L20.6789 40.9015H27.3211L27.7731 41.2837L27.2865 37.3889Z"
            fill="#161616"
          />
          <path
            d="M45.0221 16.7838L46.5 9.58514L44.2744 2.89074L27.2864 15.4971L33.8245 21.027L43.0572 23.7217L45.0916 21.3395L44.2048 20.6962L45.6133 19.4094L44.5352 18.5748L45.9436 17.4967L45.0221 16.7838Z"
            fill="#763E1A"
          />
          <path
            d="M1.5 9.58531L2.99536 16.784L2.03903 17.4969L3.46484 18.575L2.38678 19.4096L3.79521 20.6963L2.90842 21.3397L4.94281 23.7219L14.1763 21.0275L20.7137 15.4973L3.7258 2.89074L1.5 9.58531Z"
            fill="#763E1A"
          />
          <path
            d="M43.0572 23.7217L33.8245 21.027L36.6066 25.2349L32.4507 33.3548L37.9449 33.2855L46.1525 33.2861L43.0572 23.7217Z"
            fill="#F5841F"
          />
          <path
            d="M14.1763 21.0275L4.94281 23.7219L1.8653 33.2861L10.0546 33.2855L15.5496 33.3548L11.3942 25.2354L14.1763 21.0275Z"
            fill="#F5841F"
          />
          <path
            d="M26.6954 25.687L27.2864 15.4971L29.9642 8.2463L18.0361 8.2463L20.7137 15.4973L21.3053 25.6875L21.5311 28.8863L21.5483 36.7982H26.4515L26.4693 28.8863L26.6954 25.687Z"
            fill="#F5841F"
          />
        </svg>
      </div>
      <p class="home__box--text">
        Please connect your MetaMask wallet to gain access to its
        functionalities.
      </p>
      <div class="external__form--info">
        <div class="info__icon">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5979_7824)">
              <path
                d="M6 9.75C6.41421 9.75 6.75 9.41421 6.75 9C6.75 8.58579 6.41421 8.25 6 8.25C5.58579 8.25 5.25 8.58579 5.25 9C5.25 9.41421 5.58579 9.75 6 9.75Z"
                fill="#303030"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 2.25C6.20711 2.25 6.375 2.41789 6.375 2.625V6.75C6.375 6.95711 6.20711 7.125 6 7.125C5.79289 7.125 5.625 6.95711 5.625 6.75V2.625C5.625 2.41789 5.79289 2.25 6 2.25Z"
                fill="#303030"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 0.75C1.08579 0.75 0.75 1.08579 0.75 1.5V10.5C0.75 10.9142 1.08579 11.25 1.5 11.25H10.5C10.9142 11.25 11.25 10.9142 11.25 10.5V1.5C11.25 1.08579 10.9142 0.75 10.5 0.75H1.5ZM0 1.5C0 0.671573 0.671573 0 1.5 0H10.5C11.3284 0 12 0.671573 12 1.5V10.5C12 11.3284 11.3284 12 10.5 12H1.5C0.671573 12 0 11.3284 0 10.5V1.5Z"
                fill="#303030"
              />
            </g>
            <defs>
              <clipPath id="clip0_5979_7824">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="info__detail">
          <div class="info__details--title">Please Switch to Polygon</div>
          <div class="info__details--text">
            To access this application, please switch your wallet to the Polygon
            network.
          </div>
        </div>
      </div>
      <div class="home__box--button">
        <button
          id="connect"
          class="button__default home__button--connect"
          :class="{
            connected:
              contractsStore.vaultContract && !contractsStore.loading.connect
          }"
          @click="contractsStore.connectMetamask"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="
              contractsStore.vaultContract && !contractsStore.loading.connect
            "
          >
            <g id="Group">
              <path
                id="Vector"
                d="M14.6667 0H4V2.66667H14.6667V0Z"
                fill="#C6FC50"
              />
              <path
                id="Vector_2"
                d="M15.3333 4.00016H2C1.63267 4.00016 1.33333 3.70083 1.33333 3.3335C1.33333 2.96616 1.63267 2.66683 2 2.66683H2.66667V1.3335H2C0.895333 1.3335 0 2.22883 0 3.3335V13.3335C0 14.8062 1.194 16.0002 2.66667 16.0002H15.3333C15.7013 16.0002 16 15.7015 16 15.3335V4.66683C16 4.29883 15.7013 4.00016 15.3333 4.00016ZM12 11.3335C11.2633 11.3335 10.6667 10.7368 10.6667 10.0002C10.6667 9.2635 11.2633 8.66683 12 8.66683C12.7367 8.66683 13.3333 9.2635 13.3333 10.0002C13.3333 10.7368 12.7367 11.3335 12 11.3335Z"
                fill="#C6FC50"
              />
            </g>
          </svg>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="{loading: contractsStore.loading.connect}"
            v-if="
              !contractsStore.vaultContract || contractsStore.loading.connect
            "
          >
            <g clip-path="url(#clip0_5859_1203)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.125 12.375C14.3656 12.375 13.75 12.9906 13.75 13.75C13.75 14.5094 14.3656 15.125 15.125 15.125C15.8844 15.125 16.5 14.5094 16.5 13.75C16.5 12.9906 15.8844 12.375 15.125 12.375ZM12.375 13.75C12.375 12.2312 13.6062 11 15.125 11C16.6438 11 17.875 12.2312 17.875 13.75C17.875 15.2688 16.6438 16.5 15.125 16.5C13.6062 16.5 12.375 15.2688 12.375 13.75Z"
                fill="#F8F8F8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.4375 1.375C2.89049 1.375 2.36589 1.5923 1.97909 1.97909C1.5923 2.36589 1.375 2.89049 1.375 3.4375C1.375 3.98451 1.5923 4.50911 1.97909 4.89591C2.36589 5.2827 2.89049 5.5 3.4375 5.5H21.3125C21.6922 5.5 22 5.8078 22 6.1875V21.3125C22 21.6922 21.6922 22 21.3125 22H3.4375C2.52582 22 1.65148 21.6378 1.00682 20.9932C0.362164 20.3485 0 19.4742 0 18.5625V3.4375C0 2.52582 0.362164 1.65148 1.00682 1.00682C1.65148 0.362164 2.52582 0 3.4375 0H15.8125C16.1922 0 16.5 0.307804 16.5 0.6875V3.4375C16.5 3.8172 16.1922 4.125 15.8125 4.125C15.4328 4.125 15.125 3.8172 15.125 3.4375V1.375H3.4375ZM1.375 6.18752V18.5625C1.375 19.1095 1.5923 19.6341 1.97909 20.0209C2.36589 20.4077 2.89049 20.625 3.4375 20.625H20.625V6.875H3.4375C2.68944 6.875 1.96652 6.63117 1.375 6.18752Z"
                fill="#F8F8F8"
              />
            </g>
            <defs>
              <clipPath id="clip0_5859_1203">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span class="button__text" ref="buttonText">{{
            !contractsStore.vaultContract || contractsStore.loading.connect
              ? 'Connect'
              : 'Connected'
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
