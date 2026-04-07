package alicloudroscdkacs


// Properties for defining a `RosApplicationPod`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-applicationpod
type RosApplicationPodProps struct {
	ComputeClass interface{} `field:"required" json:"computeClass" yaml:"computeClass"`
	ComputeQos interface{} `field:"required" json:"computeQos" yaml:"computeQos"`
	CpuCoreNumber interface{} `field:"required" json:"cpuCoreNumber" yaml:"cpuCoreNumber"`
	Image interface{} `field:"required" json:"image" yaml:"image"`
	Kind interface{} `field:"required" json:"kind" yaml:"kind"`
	Memory interface{} `field:"required" json:"memory" yaml:"memory"`
	DiskConfig interface{} `field:"optional" json:"diskConfig" yaml:"diskConfig"`
	GpuCoreNumber interface{} `field:"optional" json:"gpuCoreNumber" yaml:"gpuCoreNumber"`
	GpuModelSeries interface{} `field:"optional" json:"gpuModelSeries" yaml:"gpuModelSeries"`
	GpuType interface{} `field:"optional" json:"gpuType" yaml:"gpuType"`
	Replicas interface{} `field:"optional" json:"replicas" yaml:"replicas"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

