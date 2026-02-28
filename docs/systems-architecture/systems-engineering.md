---
outline: deep
---

# Systems Engineering

## 📖 课程建议

### 2025 课程印象
> Contributor: @yifan | 更新于 2025-03-01

Prof. Fetzer 英语讲得相当好，课件做的简洁直观，讲课条理清晰，循循善诱，对提问也相当有耐心。
系统工程的课件看上去量相当大，每章介于大几十到一百多页，但实际上很多内容放在演示流程上，本身每页信息量不多，
只是用于辅助理解，需要记忆的内容在所有课程中应当算少的。该课程的 exercises 主要也以授课形式给出，
但是多数对对应 lecture 的复习，仅有两章的 exercises 需要 coding, 但对 open track 的同学不强制，
实际上对最终的考试帮助也微乎其微，建议不感兴趣且不强制的同学不要做。

总体来讲十分推荐对 system design 和 分布式系统 感兴趣的同学选课。对于单纯想拿学分，不想上课的同学，
这门课理解难度不大，考察得很浅，如果有相关基础，翘掉所有课复习一周足够及格了。
## 📝 考试相关

### 2025 考题分享
> Contributor: @yifan | 更新于 2025-03-01

#### 复习建议

闭卷考试，时间一小时，十页左右，没有思路可以大胆跳过，否则时间会很紧张。整体考试难度不高，
以考察最核心的概念为主，比如共识算法的角色、特性，Lamport Clocks 与 Vector Clocks 区别之类，
比课件中部分描述场景要简单很多。本课程练习课基本也都以授课的形式给出，但是内容上比 lecture 普遍少，
而且同质化程度很高，建议复习时着重注意下不同的部分，就比如第一章 lecture 中考察的 loadbalance, 
exercise 中挑了个虚拟化的对比，稍显刁钻。此外对于具体应用部分的，例如 Chubby, CEPH, Dynamo 
建议抓大放小，掌握核心特性即可，无需记忆具体的部件名称、file name 之类，考试也没涉及到代码。

#### 考题记录

1. **对比 Full/Native Virtualisation 和 Paravirtualisation 的区别**  
   - 来自 exercise1，复习时容易忽略

2. 说出并介绍共识的三个特点：Agreement，Termination，Validity

3. Paxos 是否能保证 Termination？为什么不能？具体举例说明

4. Raft 的三个角色及一句话主要职责介绍 

5. 给出提示分别指出对应的 DynamoDB 的设计点，以及对应的 advantages
    - 提示相当明显，分别对应 Consistent Hashing、Hinted Handoff 与 Merkle Trees

6. Lamport Clocks 可以识别顺序吗？为什么不可以

7. Vector Clocks 为什么可以识别顺序  

8. 如何分配使给定情景满足 Quorum
    - R+W>N 即可 考察得很简单

9. Sloppy Quorum 的好处与坏处，相较于 Quorum  

10. 对于库存管理和购物推荐的场景,选择 ACID 还是 BASE，并说明各自效果 

11. 如何解决 Memcached 的两种常见问题：Partition & Replication  

12. **对比强制锁 vs 非强制锁 以及 粗粒度锁 vs 细粒度锁**
    - Chubby 设计特性较多，复习时容易忽略
