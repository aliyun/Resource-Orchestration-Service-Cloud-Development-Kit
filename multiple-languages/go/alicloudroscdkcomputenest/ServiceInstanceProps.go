package alicloudroscdkcomputenest


// Properties for defining a `ServiceInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-serviceinstance
type ServiceInstanceProps struct {
	// Property service: Service details.
	Service interface{} `field:"required" json:"service" yaml:"service"`
	// Property commodity: The purchase order information of the cloud market does not need to be transmitted if the service is not on the cloud market or charged by volume.
	Commodity interface{} `field:"optional" json:"commodity" yaml:"commodity"`
	// Property contactGroup: Alarm Contact Group.
	ContactGroup interface{} `field:"optional" json:"contactGroup" yaml:"contactGroup"`
	// Property dryRun: Whether to perform PreCheck on the creation request, including permissions and instance status verification.
	//
	// Possible values:
	// - **true**: The request is sent without creating a service instance.
	// - **false**: Sends the request and creates a service instance after the check is passed.
	DryRun interface{} `field:"optional" json:"dryRun" yaml:"dryRun"`
	// Property enableInstanceOps: Whether the service instance has the O & M function.
	//
	// Possible values:
	// - true: The service instance has a generation O & M function.
	// - false: The service instance does not have the O & M function.
	EnableInstanceOps interface{} `field:"optional" json:"enableInstanceOps" yaml:"enableInstanceOps"`
	// Property enableUserPrometheus: Whether Prometheus monitoring is enabled.
	//
	// Possible values:
	// - true: enabled.
	// - false: not enabled.
	EnableUserPrometheus interface{} `field:"optional" json:"enableUserPrometheus" yaml:"enableUserPrometheus"`
	// Property operationName: Change operation name.
	OperationName interface{} `field:"optional" json:"operationName" yaml:"operationName"`
	// Property parameters: The parameters entered by the deployment service instance.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property predefinedParameterName: Package name.
	PredefinedParameterName interface{} `field:"optional" json:"predefinedParameterName" yaml:"predefinedParameterName"`
	// Property resourceAutoPay: Whether the resource is automatically deducted from the balance.
	//
	// Value:
	// - **true**: automatic payment.
	// - **false**: Do not pay automatically.
	ResourceAutoPay interface{} `field:"optional" json:"resourceAutoPay" yaml:"resourceAutoPay"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property serviceInstanceName: The name of the service instance.
	ServiceInstanceName interface{} `field:"optional" json:"serviceInstanceName" yaml:"serviceInstanceName"`
	// Property specificationCode: Commodity specification Code.
	SpecificationCode interface{} `field:"optional" json:"specificationCode" yaml:"specificationCode"`
	// Property tags: Tags of service instance.
	Tags *[]*RosServiceInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property templateName: Template name.
	TemplateName interface{} `field:"optional" json:"templateName" yaml:"templateName"`
}

