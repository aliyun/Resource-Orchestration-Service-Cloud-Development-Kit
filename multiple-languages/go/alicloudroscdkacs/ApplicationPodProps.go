package alicloudroscdkacs


// Properties for defining a `ApplicationPod`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-applicationpod
type ApplicationPodProps struct {
	// Property computeClass: Compute class of the application pod.
	ComputeClass interface{} `field:"required" json:"computeClass" yaml:"computeClass"`
	// Property computeQos: Compute QoS of the application pod.
	ComputeQos interface{} `field:"required" json:"computeQos" yaml:"computeQos"`
	// Property cpuCoreNumber: CPU core number required by the container.
	CpuCoreNumber interface{} `field:"required" json:"cpuCoreNumber" yaml:"cpuCoreNumber"`
	// Property image: Container image for the application pod.
	Image interface{} `field:"required" json:"image" yaml:"image"`
	// Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet).
	Kind interface{} `field:"required" json:"kind" yaml:"kind"`
	// Property memory: Memory size (in GB) required by the container.
	Memory interface{} `field:"required" json:"memory" yaml:"memory"`
	// Property diskConfig: Disk configurations for the application pod.
	DiskConfig interface{} `field:"optional" json:"diskConfig" yaml:"diskConfig"`
	// Property gpuCoreNumber: GPU core number, if using GPU.
	GpuCoreNumber interface{} `field:"optional" json:"gpuCoreNumber" yaml:"gpuCoreNumber"`
	// Property gpuModelSeries: GPU model series, if using GPU.
	GpuModelSeries interface{} `field:"optional" json:"gpuModelSeries" yaml:"gpuModelSeries"`
	// Property gpuType: GPU type, default is nvidia.com\/gpu.
	GpuType interface{} `field:"optional" json:"gpuType" yaml:"gpuType"`
	// Property replicas: Number of replicas for Deployment or StatefulSet.
	Replicas interface{} `field:"optional" json:"replicas" yaml:"replicas"`
	// Property zoneId: Zone ID for the application pod.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

