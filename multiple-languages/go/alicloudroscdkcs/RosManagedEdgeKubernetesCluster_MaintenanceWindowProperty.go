package alicloudroscdkcs


type RosManagedEdgeKubernetesCluster_MaintenanceWindowProperty struct {
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	MaintenanceTime interface{} `field:"optional" json:"maintenanceTime" yaml:"maintenanceTime"`
	Recurrence interface{} `field:"optional" json:"recurrence" yaml:"recurrence"`
	WeeklyPeriod interface{} `field:"optional" json:"weeklyPeriod" yaml:"weeklyPeriod"`
}

