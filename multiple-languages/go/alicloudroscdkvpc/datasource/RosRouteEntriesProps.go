package datasource


// Properties for defining a `RosRouteEntries`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
type RosRouteEntriesProps struct {
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	DestinationCidrBlock interface{} `field:"optional" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	NextHopId interface{} `field:"optional" json:"nextHopId" yaml:"nextHopId"`
	NextHopType interface{} `field:"optional" json:"nextHopType" yaml:"nextHopType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RouteEntryId interface{} `field:"optional" json:"routeEntryId" yaml:"routeEntryId"`
	RouteEntryName interface{} `field:"optional" json:"routeEntryName" yaml:"routeEntryName"`
	RouteEntryType interface{} `field:"optional" json:"routeEntryType" yaml:"routeEntryType"`
}

