---
outline: deep
---

# Distributed Systems

## 📖 课程建议

### 2025 课程印象
> Contributor: @yifan | 更新于 2025-03-01

Dr. Springer 讲英语有点口音，并且在表达上没那么流利，但课件内容比较清晰，即便不听课问题也不大。
每章课件大概四五十页，在开卷考试的前提下内容还算合理，平日跟着上课听讲足以应付考试。课程内容覆盖很广，
从分布式架构到服务发现，再到数据处理（MapReduce，YARN，Flink），浅入浅出，理解难度较低，
个人认为是系统架构模块的入门级课程。课程习题课主要解释讨论 opal 上习题的答案，会挑选学生答案进行讨论，
由于对部分同学的口音并不熟悉，练习课对我来讲效率很低，多数情况下自己做题参照答案就可以掌握。考试前练习课的
课件也会上传到 opal，复习时可以重点参照。

总的来说，个人认为课程中规中矩，但开卷考试情况下该门拿到学分相对容易。

## 📝 考试相关

### 2025 考题分享
> Contributor: @yifan | 更新于 2025-03-01

#### 复习建议

本学期为开卷考试，只允许记录在A4纸的一面，考试时间90分钟，题量偏大但开考前允许先浏览题目10分钟，
拿到一半的分数及格（往年闭卷考试要求是1/3）。
建议结合 opal 中练习题复习，考试中会出现部分原题，而且习题多半也是重点内容。
本课程每章内容相对琐碎，在复习时建议根据自己掌握程度整理 cheat sheet 即便是重点内容，
如果本身理解相对深入，可以考虑只记录几个关键词，比如很多概念性内容（Scalability, Coupling etc.）
对内容有基本理解即可，考察方式并不灵活。如果不追求较高分数，只想拿到学分可以多花时间理解课件和习题，
文档记录每章重点内容，未上课情况下一周可以速通，本人的 [cheat sheet](https://docs.google.com/document/d/1IQ5ntykWXS5tQ3p6TAxj1k1pN0aH_1YeeCIvybH7f70/edit?usp=sharing) 
仅供参考


#### 考题记录

1. **用 quation 来表示 Availability， 通过什么来衡量/是什么含义（记不太清**  
   - Availability = (total_seconds_in_period – seconds_downtime) / total_seconds_in_period
2. 分别解释 Coupling 和 Cohesion，以及他们在设计分布式系统的 interrelationship
    - loose coupling and high cohesion
3. 给定几个场景，要求按照三层架构中每一层来分类
    - Presentation Tier, Processing Tier, Persistence Tier
4. 给定一个场景，分别是几种服务，要求以微服务+Choreography 的架构绘制草图，说明几个服务是如何交互
5. 介绍 Proxy Pattern 以及其在 RPC 中的体现
6. **at-most-once 在 RPC 和 MQTT 中分别是通过什么机制实现的**
7. 画出 RPC 草图：旅客重复通过 RPC 调用买票服务，传入旅客姓名和航班号，获得座位号，并解释流程
8. 2PC 中 server 挂了，恢复之后怎么做 error handing
9. Nested Transactions 与普通事务相比的两条优点
10. 对称加密+非对称加密 的场景下需要的三种密钥以及作用
    - 私钥，公钥，用于对称加密的密钥
11. 解释 Docker 和 k8s 分别是什么，两者关系是什么样的
12. 给数据，要求写出滑动窗口每个阶段的窗口内值


