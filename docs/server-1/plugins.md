# 常用功能与命令

## 快速命令表

| 功能 | 命令 |
| --- | --- |
| 主菜单 | `/menu`、`/rime`、`/help` |
| 回主城 | `/spawn` |
| 随机传送 | `/rtp` |
| 传送到玩家 | `/tpa <玩家名>` |
| 让玩家传送到你 | `/tpahere <玩家名>` |
| 接受传送请求 | `/tpaccept`、`/tpyes` |
| 拒绝传送请求 | `/tpdeny`、`/tpno` |
| 设置家 | `/sethome [名称]` |
| 回家 | `/home [名称]` |
| 删除家 | `/delhome <名称>` |
| 返回上一位置 | `/back` |
| 查看公共传送点 | `/warps` |
| 前往公共传送点 | `/warp <名称>` |
| 查看余额 | `/money` |
| 查看财富榜 | `/baltop` |
| 玩家商店帮助 | `/qs help` |
| 假人列表 | `/bot list` |

## 主菜单

| 功能 | 命令 | 例子 |
| --- | --- | --- |
| 打开主菜单 | `/menu` | - |
| 打开主菜单 | `/rime` | - |
| 打开主菜单 | `/help` | - |

## 传送

| 功能 | 命令格式 | 例子 |
| --- | --- | --- |
| 回主城 | `/spawn` | - |
| 随机传送 | `/rtp` | - |
| 请求传送到玩家 | `/tpa <玩家名>` | `/tpa Steve` |
| 请求玩家传送到你 | `/tpahere <玩家名>` | `/tpahere Steve` |
| 接受传送请求 | `/tpaccept` 或 `/tpyes` | - |
| 拒绝传送请求 | `/tpdeny` 或 `/tpno` | - |

## 家

| 功能 | 命令格式 | 例子 |
| --- | --- | --- |
| 设置默认家 | `/sethome` | - |
| 设置命名家 | `/sethome <名称>` | `/sethome farm` |
| 回默认家 | `/home` | - |
| 回命名家 | `/home <名称>` | `/home farm` |
| 删除家 | `/delhome <名称>` | `/delhome farm` |

## 返回上一位置

| 功能 | 命令 | 例子 |
| --- | --- | --- |
| 返回上一位置 | `/back` | - |

## 公共传送点

| 功能 | 命令格式 | 例子 |
| --- | --- | --- |
| 查看公共传送点 | `/warps` | - |
| 前往公共传送点 | `/warp <名称>` | `/warp spawn` |

## 经济

参数说明：

| 参数 | 含义 |
| --- | --- |
| `<玩家名>` | 必填，玩家名字 |
| `<金额>` | 必填，转账金额 |
| `[页码]` | 可选，排行榜页码 |

| 功能 | 命令格式 | 例子 |
| --- | --- | --- |
| 查看自己的余额 | `/money` | - |
| 查看自己的余额 | `/balance` 或 `/bal` | - |
| 查看其他玩家余额 | `/money <玩家名>` | `/money Steve` |
| 查看其他玩家余额 | `/balance <玩家名>` 或 `/bal <玩家名>` | `/bal Steve` |
| 给玩家转钱 | `/pay <玩家名> <金额>` | `/pay Steve 100` |
| 开关收款 | `/paytoggle` | - |
| 开关某个玩家向你转账 | `/paypermission <玩家名>` 或 `/payperm <玩家名>` | `/payperm Steve` |
| 查看财富榜 | `/balancetop` 或 `/baltop` | - |
| 查看财富榜指定页 | `/balancetop [页码]` 或 `/baltop [页码]` | `/baltop 2` |

## 玩家商店

参数说明：

| 参数 | 含义 |
| --- | --- |
| `<价格>` | 必填，商店单价 |
| `<数量>` | 必填，物品数量 |
| `<物品>` | 必填，要搜索的物品名 |
| `<玩家名>` | 必填，玩家名字 |
| `[页码]` | 可选，列表页码 |

| 功能 | 命令格式 | 例子 |
| --- | --- | --- |
| 查看帮助 | `/qs help` | - |
| 创建商店 | `/qs create <价格>` | `/qs create 10` |
| 切换为出售商店 | `/qs sell` | - |
| 切换为收购商店 | `/qs buy` | - |
| 修改价格 | `/qs price <价格>` | `/qs price 15` |
| 修改每次交易数量 | `/qs size <数量>` | `/qs size 64` |
| 补货 | `/qs refill <数量>` | `/qs refill 64` |
| 取出库存 | `/qs empty <数量>` | `/qs empty 64` |
| 查找商品 | `/qs find <物品>` | `/qs find diamond` |
| 查看商店列表 | `/qs browse [页码]` | `/qs browse 2` |
| 预览商店 | `/qs preview` | - |
| 删除商店 | `/qs remove` | - |
| 修改展示物品 | `/qs item` | - |
| 修改商店名称 | `/qs name` | - |
| 查看交易记录 | `/qs history` | - |
| 添加商店助手 | `/qs staff add <玩家名>` | `/qs staff add Steve` |
| 移除商店助手 | `/qs staff del <玩家名>` | `/qs staff del Steve` |
| 查看商店助手 | `/qs staff list` | - |
| 转让当前商店 | `/qs transfer <玩家名>` | `/qs transfer Steve` |
| 接受转让 | `/qs transfer accept` | - |
| 拒绝转让 | `/qs transfer deny` | - |
| 转让所有商店 | `/qs transferall <玩家名>` | `/qs transferall Steve` |
| 接受全部转让 | `/qs transferall accept` | - |
| 拒绝全部转让 | `/qs transferall deny` | - |

## 假人

参数说明：

| 参数 | 含义 |
| --- | --- |
| `<假人名>` | 必填，假人的名字 |
| `[皮肤名]` | 可选，假人使用的皮肤名 |
| `[世界]` | 可选，世界名 |
| `[时] [分] [秒]` | 可选，定时移除假人的时间 |
| `[TickDelay]` | 可选，第一次执行动作前等待多少 tick |
| `[TickInterval]` | 可选，每次动作之间间隔多少 tick |
| `[DoNumber]` | 可选，动作执行次数；`-1` 表示无限次 |
| `[UseTickTimeout]` | 可选，使用物品动作的最长使用时间；`-1` 表示不限制 |
| `<Yaw>` | 必填，左右朝向角度 |
| `<Pitch>` | 必填，上下朝向角度 |
| `<X> <Y> <Z>` | 必填，坐标 |
| `<玩家名>` | 必填，玩家名字 |

### 查看假人列表

```txt
/bot list
/bot list [世界]
```

例子：

```txt
/bot list
/bot list world
/bot list world_nether
/bot list world_the_end
```

### 创建假人

```txt
/bot create <假人名>
/bot create <假人名> [皮肤名]
```

例子：

```txt
/bot create bot_01
/bot create bot_01 Steve
```

### 移除假人

```txt
/bot remove <假人名>
/bot remove <假人名> [时] [分] [秒]
```

例子：

```txt
/bot remove bot_01
/bot remove bot_01 0 5 0
```

### 保存假人

```txt
/bot save <假人名>
```

例子：

```txt
/bot save bot_01
```

### 加载假人

```txt
/bot load <假人名>
```

例子：

```txt
/bot load bot_01
```

### 查看假人动作列表

```txt
/bot action <假人名> list
```

例子：

```txt
/bot action bot_01 list
```

### 停止假人动作

```txt
/bot action <假人名> stop <动作序号>
/bot action <假人名> stop all
```

例子：

```txt
/bot action bot_01 stop 1
/bot action bot_01 stop all
```

### 开始假人动作

```txt
/bot action <假人名> start <动作名> [动作参数]
```

### 假人动作表

| 动作 | 命令格式 | 例子 |
| --- | --- | --- |
| 攻击实体 | `/bot action <假人名> start attack [TickDelay] [TickInterval] [DoNumber]` | `/bot action bot_01 start attack 0 20 -1` |
| 破坏方块 | `/bot action <假人名> start break [TickDelay] [TickInterval] [DoNumber]` | `/bot action bot_01 start break 0 20 -1` |
| 丢出背包物品 | `/bot action <假人名> start drop` | `/bot action bot_01 start drop` |
| 自动钓鱼 | `/bot action <假人名> start fish [TickDelay] [TickInterval] [DoNumber]` | `/bot action bot_01 start fish 0 20 -1` |
| 跳跃 | `/bot action <假人名> start jump [TickDelay] [TickInterval] [DoNumber]` | `/bot action bot_01 start jump 0 20 -1` |
| 注视玩家 | `/bot action <假人名> start look <玩家名>` | `/bot action bot_01 start look Steve` |
| 注视坐标 | `/bot action <假人名> start look <X> <Y> <Z>` | `/bot action bot_01 start look 100 64 -20` |
| 设置朝向 | `/bot action <假人名> start rotation <Yaw> <Pitch>` | `/bot action bot_01 start rotation 90 30` |
| 下蹲 | `/bot action <假人名> start sneak` | `/bot action bot_01 start sneak` |
| 游泳 / 浮起 | `/bot action <假人名> start swim` | `/bot action bot_01 start swim` |
| 模拟右键 | `/bot action <假人名> start use_auto [TickDelay] [TickInterval] [DoNumber] [UseTickTimeout]` | `/bot action bot_01 start use_auto 0 20 -1 -1` |
| 使用主手物品 | `/bot action <假人名> start use [TickDelay] [TickInterval] [DoNumber] [UseTickTimeout]` | `/bot action bot_01 start use 0 20 -1 -1` |
| 使用副手物品 | `/bot action <假人名> start use_offhand [TickDelay] [TickInterval] [DoNumber] [UseTickTimeout]` | `/bot action bot_01 start use_offhand 0 20 -1 -1` |
| 对方块使用主手物品 | `/bot action <假人名> start use_on [TickDelay] [TickInterval] [DoNumber] [UseTickTimeout]` | `/bot action bot_01 start use_on 0 20 -1 -1` |
| 对方块使用副手物品 | `/bot action <假人名> start use_on_offhand [TickDelay] [TickInterval] [DoNumber] [UseTickTimeout]` | `/bot action bot_01 start use_on_offhand 0 20 -1 -1` |
| 对实体使用主手物品 | `/bot action <假人名> start use_to [TickDelay] [TickInterval] [DoNumber] [UseTickTimeout]` | `/bot action bot_01 start use_to 0 20 -1 -1` |
| 对实体使用副手物品 | `/bot action <假人名> start use_to_offhand [TickDelay] [TickInterval] [DoNumber] [UseTickTimeout]` | `/bot action bot_01 start use_to_offhand 0 20 -1 -1` |

## 语音聊天

| 功能 | 命令格式 | 例子 |
| --- | --- | --- |
| 查看语音聊天命令 | `/voicechat help` | - |
| 邀请玩家加入当前语音组 | `/voicechat invite <玩家名>` | `/voicechat invite Steve` |
| 加入语音组 | `/voicechat join <组名>` | `/voicechat join base` |
| 加入指定 ID 的语音组 | `/voicechat join <组ID>` | `/voicechat join 00000000-0000-0000-0000-000000000000` |
| 离开当前语音组 | `/voicechat leave` | - |
