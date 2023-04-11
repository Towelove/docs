# 项目技术栈以及版本

## 版本速览

SpringBoot 2.7.7

SpringCloud 2021.0.5

SpringCloudAlibaba 2021.0.4

RocketMQ 4.9.4

Seata 1.5.2

Sentinel 1.8.5

RocketMQ 4.9.4

Nacos 2.0.4

MySQL 8.0.32

Redis 6.0.16

xxl-job 2.2.0

## 前端技术栈

## 后端技术栈

### SpringBoot

确定了项目大概要实现的功能，我们就可以大概确定我们的技术栈了。

首先是SpringBoot，这里我使用的版本是2.7.7。

特别注意，在SpringBoot2.7.x版本之后，慢慢不支持META-INF/spring.factories文件了需要导入的自动配置类可以放在/META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports文件中，可以看下spring-boot-autoconfigure-2.7.7.jar下的这个文件

![](https://www.notion.so/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2023%2Fpng%2F34806522%2F1677208051481-375bd0cb-302e-4f75-b97f-8609188c6c05.png?id=6633cd9b-83fb-4afa-baa2-a1c0fceb9a30&table=block&spaceId=b64c4d64-f403-4087-86e0-a1e8fdb8361f&width=2000&userId=c25e5a34-6e8a-4a43-ba9f-f420d2f8d2b7&cache=v2)

对比SpringBoot2.3.12.RELEASE版本

![](https://www.notion.so/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2023%2Fpng%2F34806522%2F1677208156604-978d6bbc-1ee5-491a-a3ad-c18976a2504b.png?id=101f7a3f-2bd1-4898-8d44-d5bea44ee7c8&table=block&spaceId=b64c4d64-f403-4087-86e0-a1e8fdb8361f&width=2000&userId=c25e5a34-6e8a-4a43-ba9f-f420d2f8d2b7&cache=v2)

可以大概看一下这篇文章[SpringBoot2.7新特性](https://blog.csdn.net/f641385712/article/details/124879204)

### SpringCloud

![](https://www.notion.so/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2023%2Fpng%2F34806522%2F1677209781351-fe9beeec-4e81-4575-8f30-3b37397c545e.png?id=bd021fb1-56e1-479d-9fbf-e223c07247d2&table=block&spaceId=b64c4d64-f403-4087-86e0-a1e8fdb8361f&width=2000&userId=c25e5a34-6e8a-4a43-ba9f-f420d2f8d2b7&cache=v2)

[SpringCloudAlibaba版本关系](https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E#%E7%BB%84%E4%BB%B6%E7%89%88%E6%9C%AC%E5%85%B3%E7%B3%BB)

### SpringCloud-Gateway

### [Nacos动态修改网关配置](https://www.iocoder.cn/Spring-Cloud/Spring-Cloud-Gateway/?self)

### 自定义验证码过滤器

这里需要注意自定义的局部过滤器的位置，如果本身他的过滤位置就在后面，而前面的过滤请求已经过滤过同样的请求，那么就会失效了哦，所以这里验证码的过滤器要放在前面一点。下面是验证码过滤器由于放置的位置过于靠后，所以导致甚至没有这一过滤器在过滤器链中。

![](https://www.notion.so/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2023%2Fpng%2F34806522%2F1678437851493-06d0f38e-ef8d-4e7c-af4d-7576ca580edc.png?id=8c50cbe3-18bd-4aa2-8b67-d53302a6b1bc&table=block&spaceId=b64c4d64-f403-4087-86e0-a1e8fdb8361f&width=2000&userId=c25e5a34-6e8a-4a43-ba9f-f420d2f8d2b7&cache=v2)

同时，由于验证码的校验并不是所有的请求都需要，只需要对登录和注册请求进行过滤即可，因此这个验证码校验的过滤器是局部过滤器而非全局过滤器，为了确保局部过滤器可以生效，必须设定spring.cloud.gateway.discovery.locator.enabled=false，否则我们的局部过滤器不会生效。

下面是正确的验证码过滤器的配置

![](https://www.notion.so/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2023%2Fpng%2F34806522%2F1678431896783-47a7f1ce-410d-46a6-9ed7-3b553577f896.png?id=8decf13c-b802-4428-bf2e-a3e3d10550d6&table=block&spaceId=b64c4d64-f403-4087-86e0-a1e8fdb8361f&width=2000&userId=c25e5a34-6e8a-4a43-ba9f-f420d2f8d2b7&cache=v2)

![](https://www.notion.so/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2023%2Fpng%2F34806522%2F1678431438247-5736f6c3-77aa-43f5-829e-17f1ef96c880.png?id=d12da11b-7dc5-4826-9ba9-806ef4cdc673&table=block&spaceId=b64c4d64-f403-4087-86e0-a1e8fdb8361f&width=2000&userId=c25e5a34-6e8a-4a43-ba9f-f420d2f8d2b7&cache=v2)


### SpringSecurity

注意，这个模块完成首先需要基于feign和user模块的完成，因为不应该再让ss模块再去接入mysql数据库然后去访问数据库，而是应该通过远程调用的方式

### MySQL

#### 表设计

用户表是最基本的一张表 其次，由于项目的短信发送基于的是电子邮箱，那么不同的邮箱类型，是需要注意的 他们的协议是不同的，host也不同，因此此时需要一张字典表，用于存放可以使用的协议 还需要一张邮箱表，用于存放用户的邮箱信息

![](https://www.notion.so/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2023%2Fpng%2F34806522%2F1677913106131-100877ec-4189-46bd-bc12-1901c16b32ad.png%3Fx-oss-process%3Dimage%252Fresize%252Cw_718%252Climit_0?id=0ed2cef4-a45d-4e90-91c2-f5937d82d8c0&table=block&spaceId=b64c4d64-f403-4087-86e0-a1e8fdb8361f&width=2000&userId=c25e5a34-6e8a-4a43-ba9f-f420d2f8d2b7&cache=v2)

#### 索引设计

我们知道，索引是可以设定为唯一索引的，对于某些字段，我们可以设定其为唯一索引，这样子以这个字段作为查询条件的时候，我们的查询效率会提高，并且其对修改update操作的性能损耗是可以忽略不计的。 业务需求唯一字段的时候，一般不考虑性能问题. 【强制】业务上具有唯一特性的字段，即使是多个字段的组合，也必须建成唯一索引。 说明：不要以为唯一索引影响了 insert 速度，这个速度损耗可以忽略，但提高查找速度是明 显的；另外，即使在应用层做了非常完善的校验控制，只要没有唯一索引，根据墨菲定律，必 然有脏数据产生。 索引设计原则： 适合创建索引●频繁作为where条件语句查询字段●关联字段需要建立索引●排序字段可以建立索引●分组字段可以建立索引(因为分组前提是排序)●统计字段可以建立索引（如.count(),max()）不适合创建索引●频繁更新的字段不适合建立索引●where，分组，排序中用不到的字段不必要建立索引●可以确定表数据非常少不需要建立索引●参与mysql函数计算的列不适合建索引创建索引时避免有如下极端误解：1）宁滥勿缺。认为一个查询就需要建一个索引。 2）宁缺勿滥。认为索引会消耗空间、严重拖慢更新和新增速度。 3）抵制惟一索引。认为业务的惟一性一律需要在应用层通过“先查后插”方式解决。4）整个表的索引个数不超过5个。数据库版本：优化：索引下推优化索引使用原则：注意要防止索引的失效。

### RocketMQ

### Redis

### Minio

### Nacos

### Sentinel

### Seata

## 运维技术栈
