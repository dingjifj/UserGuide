---
sidebar_label: '快速开始'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ImageLayout from '@site/src/components/ImageLayout';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 快速开始

## 1. 环境准备

在开始使用归途回国加速 VPN 之前，请确保您满足以下环境要求：

* 设备已连接可用网络（建议稳定 Wi-Fi 或蜂窝网络）。
* 系统版本满足要求（详见《兼容性与系统要求》）。
* 已准备好账号（手机号/邮箱/第三方登录方式，以产品实际为准）。

## 2. 安装与打开应用

### 2.1 下载与安装

<Tabs>
  <TabItem value="item1" label="iOS" default>
 App Store 搜索【归途vpn】下载安装

 ![screenshot](/img/appdownload.png)
  </TabItem>
  <TabItem value="item2" label="Android">
    安卓这里没有测试机，这里暂时不写。
  </TabItem>
  <TabItem value="item3" label="Windows/macOS">
    网页搜索 https://www.dnscn.me/

     ![screenshot](/img/pcdownload.png)
  </TabItem>
</Tabs>

### 2.2 首次打开的权限提示

首次启动可能出现权限/系统弹窗：

* **网络/本地网络权限**：用于建立加速连接
* **VPN 配置许可（系统弹窗）**：选择“允许/添加配置”

:::info
说明：这是系统级提示，用于建立加密连接。若点击“拒绝”，将无法正常连接。
:::

## 3. 账号注册与登录

1. 打开应用后，点击【注册/登录】按钮。
2. 选择注册方式（手机号/邮箱/第三方登录），按照提示完成注册。
3. 注册成功后，使用账号信息登录。

## 4. 一键连接

1. 回到首页
2. 选择【智能选线/自动】（推荐）
3. 点击【一键连接】按钮

连接成功后通常会看到：

* 状态显示【已连接】
* 当前节点/线路名称
* 连接时长与基础网络信息

>如果出现系统弹窗（添加 VPN 配置），请选择“允许”。

**以下是从下载到连接节点的完整视频**：
<ImageLayout column={1} imgHeight="600px">
  <video src={useBaseUrl('/video/startvideo.mp4')} title="功能操作演示视频" />
</ImageLayout>

**以下是下载到连接的流程图**：

```mermaid

graph TD
    A([开始]) --> B[选择平台<br/>iOS / Android / Windows / macOS]
    B --> C[下载应用<br/>App Store / 官网 / 应用商店]
    C --> D[安装并打开应用]
    D --> E{是否首次打开?}
    E -- 是 --> F[授予必要权限<br/>网络权限 / 本地网络权限]
    F --> G{系统是否弹出 VPN 配置许可?}
    G -- 是 --> H[点击“允许/添加配置”】【完成系统验证】]
    G -- 否 --> I[进入登录页]
    H --> I
    E -- 否 --> I

    I --> J{是否已有账号?}
    J -- 否 --> K[注册账号<br/>手机号/邮箱/第三方]
    K --> L[登录成功]
    J -- 是 --> L

    L --> M{是否已开通会员/订阅?}
    M -- 否 --> N[选择套餐并购买<br/>包月/包季/包年]
    N --> O[支付成功 -> 权益生效]
    M -- 是 --> P[确认会员有效期/权益状态]

    O --> Q[返回首页]
    P --> Q
    Q --> R[选择线路：智能选线（推荐）]
    R --> S[点击“一键连接”]
    S --> T{连接是否成功?}
    T -- 是 --> U([已连接<br/>显示节点/时长/状态])
    T -- 否 --> V[切换节点/模式<br/>或更换网络后重试]
    V --> S
    ```

## 5. 常见问题

** Q1：提示“需要添加 VPN 配置/权限”，我该怎么做**？
在弹窗中选择【允许/添加配置】并按系统要求验证（可能需要解锁/指纹/密码）。

**Q2：显示已连接，但国内 App 仍打不开/无变化？**
* 切换节点或模式再测试
* 某些服务本身可能有地区/账号限制或服务器波动（与加速无关）

### 5.3 App 显示已连接但效果不明显

* 切换节点或模式再测试
* 某些服务本身可能有地区/账号限制或服务器波动（与加速无关）

更多问题请前往[《常见问题（FAQ）》](./FAQ.md)章节查看解决方案与建议或者联系客服。

