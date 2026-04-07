package alicloudroscdkthreatdetection


// Properties for defining a `Group`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
type GroupProps struct {
	// Property groupId: The ID of the server group for which you want to add to or remove servers.
	//
	// >  To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
	//
	// >  To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
}

