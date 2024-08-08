package alicloudroscdkemr


type RosCluster2_NodeSelectorProperty struct {
	NodeSelectType interface{} `field:"required" json:"nodeSelectType" yaml:"nodeSelectType"`
	NodeGroupId interface{} `field:"optional" json:"nodeGroupId" yaml:"nodeGroupId"`
	NodeGroupName interface{} `field:"optional" json:"nodeGroupName" yaml:"nodeGroupName"`
	NodeGroupTypes interface{} `field:"optional" json:"nodeGroupTypes" yaml:"nodeGroupTypes"`
	NodeNames interface{} `field:"optional" json:"nodeNames" yaml:"nodeNames"`
}

