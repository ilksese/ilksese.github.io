import React, {Component} from 'react';
import "./Schedule.css"

const NodeType = {
    "start": 0,
    "approvals": 1,
    "end": -1,
    "vote": 2
}

const Node = new Map(
    [[0, {"name": "开始节点", "className": "start-node"}],
     [1, {"name": "审批节点", "className": "approval-node"}],
     [-1, {"name": "结束节点", "className": "end-node"}],
     [2, {"name": "否决节点", "className": "vote-node"}],],
);

export default class Schedule extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: "rect",
            nodes: [{"status": true, "type": 0},
            {"status": true, "type": 1, "timestamp": "12345687", "view": "46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国46545646我爱你祖国"},
            {"status": true, "type": -1},
            {"status": true, "type": 2},],
        }
    }
    componentDidMount () {
        let nodeList = document.querySelectorAll(".node");
        const startNode = nodeList[0];
        // const voteNode = nodeList[nodeList.length - 1];
        nodeList.forEach(function (node, index) {
            const classList = node.classList;
            // 上个节点
            const preNode = nodeList[index - 1];
            if (classList.contains("active-node")) {
                // 是否已经否决
                // const isVoted = voteNode.classList.contains("active-node");
                // if (classList.contains("approval-node") && !isVoted) {
                if (classList.contains("approval-node")) {
                    node.classList.add("active-top-left-border");
                    if (preNode.classList.contains("approval-node")) {
                        preNode.classList.add("active-top-right-border");
                    } else if (preNode.classList.contains("start-node")) {
                        preNode.classList.add("active-top-border");
                    }
                // } else if (classList.contains("end-node") && !isVoted) {
                } else if (classList.contains("end-node")) {
                    node.classList.add("active-top-border");
                    preNode.classList.add("active-top-right-border");
                } else if (classList.contains("vote-node")) {
                    node.classList.add("active-top-right-border");
                    // 如果是最后一个节点，需要激活开始节点左边
                    if (index === nodeList.length - 1) {
                        node.classList.add("active-top-left-border");
                        startNode.classList.add("active-left-border");
                    }
                    if (preNode.classList.contains("vote-node")) {
                        // 如果上一个节点是否决节点，激活上个节点左边
                        preNode.classList.add("active-top-left-border");
                    } else if (preNode.classList.contains("end-node")) {
                        // 如果上一个节点时结束节点，激活上个节点右边
                        preNode.classList.add("active-right-border");
                    }
                }
            }
        })
    }
    createNode = ({status, type, names, view, timestamp, key}) => {
        const padding = <div style={{height: "12px"}}></div>
        const autoDisplayDiv = (value, className) => (<div className={`${className ?? ""}`} style={{"display": value ? "flex" : "none"}}>{value}</div>);
        const nodeClassName = ["node"];
        let nodeContent = null;
        if (status) nodeClassName.push("active-node");
        nodeClassName.push(Node.get(type)["className"]);
        switch (type) {
            case NodeType.start:
            case NodeType.end:{
                nodeContent = (
                    <div className="details">
                        {padding}
                        <div>{Node.get(type)["name"]}</div>
                        {autoDisplayDiv(timestamp)}
                        <div></div>
                    </div>
                );
                break;
            }
            case NodeType.approvals:
            case NodeType.vote: {
                nodeContent = (
                    <React.Fragment>
                        <div className='border top-left-border'></div>
                        <div className='border top-right-border'></div>
                        <div className="details">
                            {padding}
                            <div>{`${Node.get(type)["name"]}:${Array.isArray(names) ? names.join(",") : ""}`}</div>
                            {autoDisplayDiv(view, 'view')}
                            {autoDisplayDiv(timestamp)}
                        </div>
                    </React.Fragment>
                );
                break;
            }
            default:
        }
        return <div key={`${Node.get(type)["className"]}`} className={nodeClassName.join(" ")}>{nodeContent}</div>;
    }
    render () {
        const {type} = this.props;
        const {nodes} = this.state;
        const nodeList = nodes.map(node => this.createNode(node));
        const startNodes = nodeList.filter(jsxNode => jsxNode.key.includes("start-node"));
        const approvalNode = nodeList.filter(jsxNode => jsxNode.key.includes("approval-node"));
        const endNodes = nodeList.filter(jsxNode => jsxNode.key.includes("end-node"));
        const voteNodes = nodeList.filter(jsxNode => jsxNode.key.includes("vote-node"));
        return (
            <div id="rect-approval-process" style={{width: "70%"}}>
                <div className="top-node-wrap">
                    {startNodes}
                    {approvalNode}
                    {endNodes}
                </div>
                <div className="bottom-node-wrap" style={{display: type !== "line" ? "block" : "none"}}>
                    {voteNodes}
                </div>
            </div>
        );
    }
}