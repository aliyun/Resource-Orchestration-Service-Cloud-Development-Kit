package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `DbPlan`.
type IDbPlan interface {
	alicloudroscdkcore.IResource
	// Attribute ContinuousPlan: Continuous backup plan schedule.
	//
	// Use {   "type": "continuous" }.
	AttrContinuousPlan() interface{}
	// Attribute ContinuousUuid: Uuid of continuous backup plan.
	AttrContinuousUuid() interface{}
	// Attribute CumulativePlan: Cumulative plan schedule, only for mssql.
	//
	// More details see FullPlan.
	AttrCumulativePlan() interface{}
	// Attribute CumulativeUuid: Uuid of cumulative plan.
	AttrCumulativeUuid() interface{}
	// Attribute DbPlanName: Display name of the backup plan.
	AttrDbPlanName() interface{}
	// Attribute FullPlan: Full backup plan schedule.
	//
	// daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
	AttrFullPlan() interface{}
	// Attribute FullUuid: Uuid of full backup plan.
	AttrFullUuid() interface{}
	// Attribute HostUuid: Uuid of the host of the database instance.
	AttrHostUuid() interface{}
	// Attribute IncPlan: Incremental backup plan schedule.
	//
	// Only for mysql and oracle. More details see FullPlan.
	AttrIncPlan() interface{}
	// Attribute IncUuid: Uuid of the incremental bakcup plan.
	AttrIncUuid() interface{}
	// Attribute InstanceUuid: Uuid of database instance.
	AttrInstanceUuid() interface{}
	// Attribute LogPlan: Log backup plan schedule.More details see FullPlan.
	AttrLogPlan() interface{}
	// Attribute LogUuid: Uuid of the log backup plan.
	AttrLogUuid() interface{}
	// Attribute MaxRateLimit: Max rate limit for backup job,.
	AttrMaxRateLimit() interface{}
	// Attribute MaxRetrySeconds: Max retry seconds on network failure.
	AttrMaxRetrySeconds() interface{}
	// Attribute Options: Backup options in json format, different for each type of database.
	//
	// For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}.
	AttrOptions() interface{}
	// Attribute PlanId: Id of the backup plan.
	AttrPlanId() interface{}
	// Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
	AttrSourceType() interface{}
	// Attribute Target: Target vault to backup.
	AttrTarget() interface{}
	// Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
	AttrVaultId() interface{}
	Props() *DbPlanProps
}

// The jsii proxy for IDbPlan
type jsiiProxy_IDbPlan struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDbPlan) AttrContinuousPlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContinuousPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrContinuousUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContinuousUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrCumulativePlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCumulativePlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrCumulativeUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCumulativeUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrDbPlanName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbPlanName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrFullPlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFullPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrFullUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFullUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrHostUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrIncPlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIncPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrIncUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIncUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrInstanceUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrLogPlan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogPlan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrLogUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrMaxRateLimit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxRateLimit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrMaxRetrySeconds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxRetrySeconds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrPlanId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlanId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrSourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrTarget() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTarget",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) AttrVaultId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbPlan) Props() *DbPlanProps {
	var returns *DbPlanProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

