package alicloudroscdkmse


type RosGatewayRoute_PredicatesProperty struct {
	HeaderPredicates interface{} `field:"optional" json:"headerPredicates" yaml:"headerPredicates"`
	MethodPredicates interface{} `field:"optional" json:"methodPredicates" yaml:"methodPredicates"`
	PathPredicates interface{} `field:"optional" json:"pathPredicates" yaml:"pathPredicates"`
	QueryPredicates interface{} `field:"optional" json:"queryPredicates" yaml:"queryPredicates"`
}

