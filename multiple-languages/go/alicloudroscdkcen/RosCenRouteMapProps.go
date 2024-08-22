package alicloudroscdkcen


// Properties for defining a `RosCenRouteMap`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenroutemap
type RosCenRouteMapProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	CenRegionId interface{} `field:"required" json:"cenRegionId" yaml:"cenRegionId"`
	MapResult interface{} `field:"required" json:"mapResult" yaml:"mapResult"`
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	TransmitDirection interface{} `field:"required" json:"transmitDirection" yaml:"transmitDirection"`
	AsPathMatchMode interface{} `field:"optional" json:"asPathMatchMode" yaml:"asPathMatchMode"`
	CidrMatchMode interface{} `field:"optional" json:"cidrMatchMode" yaml:"cidrMatchMode"`
	CommunityMatchMode interface{} `field:"optional" json:"communityMatchMode" yaml:"communityMatchMode"`
	CommunityOperateMode interface{} `field:"optional" json:"communityOperateMode" yaml:"communityOperateMode"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DestinationChildInstanceTypes interface{} `field:"optional" json:"destinationChildInstanceTypes" yaml:"destinationChildInstanceTypes"`
	DestinationCidrBlocks interface{} `field:"optional" json:"destinationCidrBlocks" yaml:"destinationCidrBlocks"`
	DestinationInstanceIds interface{} `field:"optional" json:"destinationInstanceIds" yaml:"destinationInstanceIds"`
	DestinationInstanceIdsReverseMatch interface{} `field:"optional" json:"destinationInstanceIdsReverseMatch" yaml:"destinationInstanceIdsReverseMatch"`
	DestinationRouteTableIds interface{} `field:"optional" json:"destinationRouteTableIds" yaml:"destinationRouteTableIds"`
	MatchAsns interface{} `field:"optional" json:"matchAsns" yaml:"matchAsns"`
	MatchCommunitySet interface{} `field:"optional" json:"matchCommunitySet" yaml:"matchCommunitySet"`
	NextPriority interface{} `field:"optional" json:"nextPriority" yaml:"nextPriority"`
	OperateCommunitySet interface{} `field:"optional" json:"operateCommunitySet" yaml:"operateCommunitySet"`
	Preference interface{} `field:"optional" json:"preference" yaml:"preference"`
	PrependAsPath interface{} `field:"optional" json:"prependAsPath" yaml:"prependAsPath"`
	RouteTypes interface{} `field:"optional" json:"routeTypes" yaml:"routeTypes"`
	SourceChildInstanceTypes interface{} `field:"optional" json:"sourceChildInstanceTypes" yaml:"sourceChildInstanceTypes"`
	SourceInstanceIds interface{} `field:"optional" json:"sourceInstanceIds" yaml:"sourceInstanceIds"`
	SourceInstanceIdsReverseMatch interface{} `field:"optional" json:"sourceInstanceIdsReverseMatch" yaml:"sourceInstanceIdsReverseMatch"`
	SourceRegionIds interface{} `field:"optional" json:"sourceRegionIds" yaml:"sourceRegionIds"`
	SourceRouteTableIds interface{} `field:"optional" json:"sourceRouteTableIds" yaml:"sourceRouteTableIds"`
}

