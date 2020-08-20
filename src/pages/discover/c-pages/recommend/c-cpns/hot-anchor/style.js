import styled from "styled-components";

export const HotRadioWrapper = styled.div`
  padding: 20px;

  .radio-list {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        .name {
          color: #000;
          font-weight: 700;
          margin-top: 3px;

          sup{
            margin: 8px 0 0 3px;
          }

          .u-icn{
            display: inline-block;
            overflow: hidden;
            vertical-align: middle;
          }

          .u-icn-1{
            width: 11px;
            height: 13px;
            background-position: 0 1px;
            font-size: 100%;
            font-style: normal;
          }
        }

        .position {
          color: #666;
        }
      }
    }
  }
`

