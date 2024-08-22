// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
 */
export interface RosConsumerGroupProps {

    /**
     * @Property consumerGroupName: Consumer group name.
     */
    readonly consumerGroupName: string | ros.IResolvable;

    /**
     * @Property consumerGroupPassword: Password of consumer group.
     */
    readonly consumerGroupPassword: string | ros.IResolvable;

    /**
     * @Property consumerGroupUserName: User name of consumer group.
     */
    readonly consumerGroupUserName: string | ros.IResolvable;

    /**
     * @Property subscriptionInstanceId: Subscription instance ID.
     */
    readonly subscriptionInstanceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConsumerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('consumerGroupPassword', ros.requiredValidator)(properties.consumerGroupPassword));
    errors.collect(ros.propertyValidator('consumerGroupPassword', ros.validateString)(properties.consumerGroupPassword));
    errors.collect(ros.propertyValidator('consumerGroupUserName', ros.requiredValidator)(properties.consumerGroupUserName));
    errors.collect(ros.propertyValidator('consumerGroupUserName', ros.validateString)(properties.consumerGroupUserName));
    errors.collect(ros.propertyValidator('consumerGroupName', ros.requiredValidator)(properties.consumerGroupName));
    errors.collect(ros.propertyValidator('consumerGroupName', ros.validateString)(properties.consumerGroupName));
    errors.collect(ros.propertyValidator('subscriptionInstanceId', ros.requiredValidator)(properties.subscriptionInstanceId));
    errors.collect(ros.propertyValidator('subscriptionInstanceId', ros.validateString)(properties.subscriptionInstanceId));
    return errors.wrap('supplied properties not correct for "RosConsumerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::ConsumerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::ConsumerGroup` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'ConsumerGroupName': ros.stringToRosTemplate(properties.consumerGroupName),
      'ConsumerGroupPassword': ros.stringToRosTemplate(properties.consumerGroupPassword),
      'ConsumerGroupUserName': ros.stringToRosTemplate(properties.consumerGroupUserName),
      'SubscriptionInstanceId': ros.stringToRosTemplate(properties.subscriptionInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::ConsumerGroup`, which is used to create a consumer group for a change tracking instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
 */
export class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::ConsumerGroup";

    /**
     * @Attribute ConsumerGroupID: Consumer group ID
     */
    public readonly attrConsumerGroupId: ros.IResolvable;

    /**
     * @Attribute ConsumerGroupName: Consumer group name
     */
    public readonly attrConsumerGroupName: ros.IResolvable;

    /**
     * @Attribute SubscriptionInstanceId: Subscription instance ID
     */
    public readonly attrSubscriptionInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property consumerGroupName: Consumer group name.
     */
    public consumerGroupName: string | ros.IResolvable;

    /**
     * @Property consumerGroupPassword: Password of consumer group.
     */
    public consumerGroupPassword: string | ros.IResolvable;

    /**
     * @Property consumerGroupUserName: User name of consumer group.
     */
    public consumerGroupUserName: string | ros.IResolvable;

    /**
     * @Property subscriptionInstanceId: Subscription instance ID.
     */
    public subscriptionInstanceId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumerGroupId = this.getAtt('ConsumerGroupID');
        this.attrConsumerGroupName = this.getAtt('ConsumerGroupName');
        this.attrSubscriptionInstanceId = this.getAtt('SubscriptionInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.consumerGroupName = props.consumerGroupName;
        this.consumerGroupPassword = props.consumerGroupPassword;
        this.consumerGroupUserName = props.consumerGroupUserName;
        this.subscriptionInstanceId = props.subscriptionInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            consumerGroupName: this.consumerGroupName,
            consumerGroupPassword: this.consumerGroupPassword,
            consumerGroupUserName: this.consumerGroupUserName,
            subscriptionInstanceId: this.subscriptionInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceClass: The instance class.
     * - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
     * - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
     * **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
     */
    readonly instanceClass: string | ros.IResolvable;

    /**
     * @Property payType: The billing method. Valid values:
     * - **PrePaid**: subscription
     * - **PostPaid**: pay-as-you-go
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property type: The type of the DTS instance. Valid values:
     * - **MIGRATION*: data migration instance
     * - **SYNC**: data synchronization instance
     * - **SUBSCRIBE**: change tracking instance
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values:
     * - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
     * - **true**: automatically renews the DTS instance when it expires.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:
     * - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
     * - **true**: automatically starts the task after the DTS instance is purchased.
     */
    readonly autoStart?: boolean | ros.IResolvable;

    /**
     * @Property computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
     */
    readonly computeUnit?: number | ros.IResolvable;

    /**
     * @Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**.
     * **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
     */
    readonly databaseCount?: number | ros.IResolvable;

    /**
     * @Property destinationEndpointEngineName: The database engine of the destination instance. Valid values:
     * - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **polardb_o**: PolarDB for Oracle cluster
     * - **polardb_pg**: PolarDB for PostgreSQL cluster
     * - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
     * - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
     * - **PostgreSQL**: self-managed PostgreSQL database
     * - **odps**: MaxCompute project
     * - **oracle**: self-managed Oracle database
     * - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **tidb**: TiDB database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster
     * - **Greenplum**: AnalyticDB for PostgreSQL instance
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DataHub**: DataHub project
     * - **DB2**: self-managed Db2 for LUW database
     * - **as400**: AS\/400
     * - **Tablestore**: Tablestore instance
     * **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
     */
    readonly destinationEndpointEngineName?: string | ros.IResolvable;

    /**
     * @Property destinationRegion: The ID of the region in which the destination instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    readonly destinationRegion?: string | ros.IResolvable;

    /**
     * @Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
     * **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
     */
    readonly du?: number | ros.IResolvable;

    /**
     * @Property feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE. 
     * - **ONLY_CONFIGURATION_FEE**: charges only configuration fees. 
     * - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
     */
    readonly feeType?: string | ros.IResolvable;

    /**
     * @Property jobId: The ID of the task.
     * **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
     */
    readonly jobId?: string | ros.IResolvable;

    /**
     * @Property period: The unit of the subscription duration. Valid values: **Year** and **Month**.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property sourceEndpointEngineName: The database engine of the source instance. Valid values:
     * - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **polardb_o**: PolarDB for Oracle cluster
     * - **polardb_pg**: PolarDB for PostgreSQL cluster
     * - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
     * - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
     * - **PostgreSQL**: self-managed PostgreSQL database
     * - **odps**: MaxCompute project
     * - **oracle**: self-managed Oracle database
     * - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **tidb**: TiDB database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster
     * - **Greenplum**: AnalyticDB for PostgreSQL instance
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DataHub**: DataHub project
     * - **DB2**: self-managed Db2 for LUW database
     * - **as400**: AS\/400
     * - **Tablestore**: Tablestore instance
     * **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
     */
    readonly sourceEndpointEngineName?: string | ros.IResolvable;

    /**
     * @Property sourceRegion: The ID of the region in which the source instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    readonly sourceRegion?: string | ros.IResolvable;

    /**
     * @Property syncArchitecture: The synchronization topology. Valid values:
     * - **oneway**: one-way synchronization. This is the default value.
     * - **bidirectional**: two-way synchronization.
     */
    readonly syncArchitecture?: string | ros.IResolvable;

    /**
     * @Property usedTime: The subscription duration.
     * - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
     */
    readonly usedTime?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('feeType', ros.validateString)(properties.feeType));
    errors.collect(ros.propertyValidator('computeUnit', ros.validateNumber)(properties.computeUnit));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    errors.collect(ros.propertyValidator('destinationRegion', ros.validateString)(properties.destinationRegion));
    errors.collect(ros.propertyValidator('instanceClass', ros.requiredValidator)(properties.instanceClass));
    if(properties.instanceClass && (typeof properties.instanceClass) !== 'object') {
        errors.collect(ros.propertyValidator('instanceClass', ros.validateAllowedValues)({
          data: properties.instanceClass,
          allowedValues: ["xxlarge","xlarge","large","medium","small","micro"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceClass', ros.validateString)(properties.instanceClass));
    errors.collect(ros.propertyValidator('sourceEndpointEngineName', ros.validateString)(properties.sourceEndpointEngineName));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('destinationEndpointEngineName', ros.validateString)(properties.destinationEndpointEngineName));
    errors.collect(ros.propertyValidator('sourceRegion', ros.validateString)(properties.sourceRegion));
    if(properties.du && (typeof properties.du) !== 'object') {
        errors.collect(ros.propertyValidator('du', ros.validateRange)({
            data: properties.du,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('du', ros.validateNumber)(properties.du));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["MIGRATION","SYNC","SUBSCRIBE"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('databaseCount', ros.validateNumber)(properties.databaseCount));
    if(properties.usedTime && (typeof properties.usedTime) !== 'object') {
        errors.collect(ros.propertyValidator('usedTime', ros.validateAllowedValues)({
          data: properties.usedTime,
          allowedValues: [1,2,3,4,5,6,7,8,9],
        }));
    }
    errors.collect(ros.propertyValidator('usedTime', ros.validateNumber)(properties.usedTime));
    errors.collect(ros.propertyValidator('autoStart', ros.validateBoolean)(properties.autoStart));
    errors.collect(ros.propertyValidator('jobId', ros.validateString)(properties.jobId));
    if(properties.syncArchitecture && (typeof properties.syncArchitecture) !== 'object') {
        errors.collect(ros.propertyValidator('syncArchitecture', ros.validateAllowedValues)({
          data: properties.syncArchitecture,
          allowedValues: ["oneway","bidirectional"],
        }));
    }
    errors.collect(ros.propertyValidator('syncArchitecture', ros.validateString)(properties.syncArchitecture));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceClass': ros.stringToRosTemplate(properties.instanceClass),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'Type': ros.stringToRosTemplate(properties.type),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoStart': ros.booleanToRosTemplate(properties.autoStart),
      'ComputeUnit': ros.numberToRosTemplate(properties.computeUnit),
      'DatabaseCount': ros.numberToRosTemplate(properties.databaseCount),
      'DestinationEndpointEngineName': ros.stringToRosTemplate(properties.destinationEndpointEngineName),
      'DestinationRegion': ros.stringToRosTemplate(properties.destinationRegion),
      'Du': ros.numberToRosTemplate(properties.du),
      'FeeType': ros.stringToRosTemplate(properties.feeType),
      'JobId': ros.stringToRosTemplate(properties.jobId),
      'Period': ros.stringToRosTemplate(properties.period),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SourceEndpointEngineName': ros.stringToRosTemplate(properties.sourceEndpointEngineName),
      'SourceRegion': ros.stringToRosTemplate(properties.sourceRegion),
      'SyncArchitecture': ros.stringToRosTemplate(properties.syncArchitecture),
      'UsedTime': ros.numberToRosTemplate(properties.usedTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::Instance`, which is a new resource type that is used to create a Data Transmission Service (DTS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::Instance";

    /**
     * @Attribute InstanceId: The ID of the DTS instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute JobId: The ID of the task.
     */
    public readonly attrJobId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceClass: The instance class.
     * - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
     * - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
     * **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
     */
    public instanceClass: string | ros.IResolvable;

    /**
     * @Property payType: The billing method. Valid values:
     * - **PrePaid**: subscription
     * - **PostPaid**: pay-as-you-go
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property type: The type of the DTS instance. Valid values:
     * - **MIGRATION*: data migration instance
     * - **SYNC**: data synchronization instance
     * - **SUBSCRIBE**: change tracking instance
     */
    public type: string | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values:
     * - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
     * - **true**: automatically renews the DTS instance when it expires.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:
     * - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
     * - **true**: automatically starts the task after the DTS instance is purchased.
     */
    public autoStart: boolean | ros.IResolvable | undefined;

    /**
     * @Property computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
     */
    public computeUnit: number | ros.IResolvable | undefined;

    /**
     * @Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**.
     * **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
     */
    public databaseCount: number | ros.IResolvable | undefined;

    /**
     * @Property destinationEndpointEngineName: The database engine of the destination instance. Valid values:
     * - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **polardb_o**: PolarDB for Oracle cluster
     * - **polardb_pg**: PolarDB for PostgreSQL cluster
     * - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
     * - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
     * - **PostgreSQL**: self-managed PostgreSQL database
     * - **odps**: MaxCompute project
     * - **oracle**: self-managed Oracle database
     * - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **tidb**: TiDB database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster
     * - **Greenplum**: AnalyticDB for PostgreSQL instance
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DataHub**: DataHub project
     * - **DB2**: self-managed Db2 for LUW database
     * - **as400**: AS\/400
     * - **Tablestore**: Tablestore instance
     * **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
     */
    public destinationEndpointEngineName: string | ros.IResolvable | undefined;

    /**
     * @Property destinationRegion: The ID of the region in which the destination instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    public destinationRegion: string | ros.IResolvable | undefined;

    /**
     * @Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
     * **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
     */
    public du: number | ros.IResolvable | undefined;

    /**
     * @Property feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE. 
     * - **ONLY_CONFIGURATION_FEE**: charges only configuration fees. 
     * - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
     */
    public feeType: string | ros.IResolvable | undefined;

    /**
     * @Property jobId: The ID of the task.
     * **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
     */
    public jobId: string | ros.IResolvable | undefined;

    /**
     * @Property period: The unit of the subscription duration. Valid values: **Year** and **Month**.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property sourceEndpointEngineName: The database engine of the source instance. Valid values:
     * - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **polardb_o**: PolarDB for Oracle cluster
     * - **polardb_pg**: PolarDB for PostgreSQL cluster
     * - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
     * - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
     * - **PostgreSQL**: self-managed PostgreSQL database
     * - **odps**: MaxCompute project
     * - **oracle**: self-managed Oracle database
     * - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **tidb**: TiDB database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster
     * - **Greenplum**: AnalyticDB for PostgreSQL instance
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DataHub**: DataHub project
     * - **DB2**: self-managed Db2 for LUW database
     * - **as400**: AS\/400
     * - **Tablestore**: Tablestore instance
     * **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
     */
    public sourceEndpointEngineName: string | ros.IResolvable | undefined;

    /**
     * @Property sourceRegion: The ID of the region in which the source instance resides.
     * **Note**: You must specify one of this parameter and the **JobId** parameter.
     */
    public sourceRegion: string | ros.IResolvable | undefined;

    /**
     * @Property syncArchitecture: The synchronization topology. Valid values:
     * - **oneway**: one-way synchronization. This is the default value.
     * - **bidirectional**: two-way synchronization.
     */
    public syncArchitecture: string | ros.IResolvable | undefined;

    /**
     * @Property usedTime: The subscription duration.
     * - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
     * **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
     */
    public usedTime: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrJobId = this.getAtt('JobId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceClass = props.instanceClass;
        this.payType = props.payType;
        this.type = props.type;
        this.autoPay = props.autoPay;
        this.autoStart = props.autoStart;
        this.computeUnit = props.computeUnit;
        this.databaseCount = props.databaseCount;
        this.destinationEndpointEngineName = props.destinationEndpointEngineName;
        this.destinationRegion = props.destinationRegion;
        this.du = props.du;
        this.feeType = props.feeType;
        this.jobId = props.jobId;
        this.period = props.period;
        this.resourceGroupId = props.resourceGroupId;
        this.sourceEndpointEngineName = props.sourceEndpointEngineName;
        this.sourceRegion = props.sourceRegion;
        this.syncArchitecture = props.syncArchitecture;
        this.usedTime = props.usedTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceClass: this.instanceClass,
            payType: this.payType,
            type: this.type,
            autoPay: this.autoPay,
            autoStart: this.autoStart,
            computeUnit: this.computeUnit,
            databaseCount: this.databaseCount,
            destinationEndpointEngineName: this.destinationEndpointEngineName,
            destinationRegion: this.destinationRegion,
            du: this.du,
            feeType: this.feeType,
            jobId: this.jobId,
            period: this.period,
            resourceGroupId: this.resourceGroupId,
            sourceEndpointEngineName: this.sourceEndpointEngineName,
            sourceRegion: this.sourceRegion,
            syncArchitecture: this.syncArchitecture,
            usedTime: this.usedTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMigrationJob2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
 */
export interface RosMigrationJob2Props {

    /**
     * @Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
     */
    readonly dataInitialization: boolean | ros.IResolvable;

    /**
     * @Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
     */
    readonly dataSynchronization: boolean | ros.IResolvable;

    /**
     * @Property dbList: The objects that you want to migrate or synchronize.
     */
    readonly dbList: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property destinationEndpoint: Destination instance configuration.
     */
    readonly destinationEndpoint: RosMigrationJob2.DestinationEndpointProperty | ros.IResolvable;

    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    readonly dtsJobName: string | ros.IResolvable;

    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    readonly sourceEndpoint: RosMigrationJob2.SourceEndpointProperty | ros.IResolvable;

    /**
     * @Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
     */
    readonly structureInitialization: boolean | ros.IResolvable;

    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly checkpoint?: string | ros.IResolvable;

    /**
     * @Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
     */
    readonly dataCheckConfigure?: RosMigrationJob2.DataCheckConfigureProperty | ros.IResolvable;

    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    readonly dedicatedClusterId?: string | ros.IResolvable;

    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    readonly delayNotice?: boolean | ros.IResolvable;

    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    readonly delayPhone?: string | ros.IResolvable;

    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    readonly delayRuleTime?: number | ros.IResolvable;

    /**
     * @Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
     */
    readonly disasterRecoveryJob?: boolean | ros.IResolvable;

    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    readonly dtsBisLabel?: string | ros.IResolvable;

    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;

    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    readonly dtsJobId?: string | ros.IResolvable;

    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    readonly errorNotice?: boolean | ros.IResolvable;

    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    readonly errorPhone?: string | ros.IResolvable;

    /**
     * @Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
     */
    readonly fileOssUrl?: string | ros.IResolvable;

    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    readonly reserve?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property status: The status of the resource. Valid values:
     * - **Migrating**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMigrationJob2Props`
 *
 * @param properties - the TypeScript properties of a `RosMigrationJob2Props`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob2PropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Migrating","Suspending","Stopping"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('reserve', ros.hashValidator(ros.validateAny))(properties.reserve));
    errors.collect(ros.propertyValidator('dataSynchronization', ros.requiredValidator)(properties.dataSynchronization));
    errors.collect(ros.propertyValidator('dataSynchronization', ros.validateBoolean)(properties.dataSynchronization));
    errors.collect(ros.propertyValidator('dedicatedClusterId', ros.validateString)(properties.dedicatedClusterId));
    errors.collect(ros.propertyValidator('delayPhone', ros.validateString)(properties.delayPhone));
    errors.collect(ros.propertyValidator('errorNotice', ros.validateBoolean)(properties.errorNotice));
    errors.collect(ros.propertyValidator('dtsJobName', ros.requiredValidator)(properties.dtsJobName));
    errors.collect(ros.propertyValidator('dtsJobName', ros.validateString)(properties.dtsJobName));
    errors.collect(ros.propertyValidator('delayRuleTime', ros.validateNumber)(properties.delayRuleTime));
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.validateString)(properties.dtsInstanceId));
    errors.collect(ros.propertyValidator('dbList', ros.requiredValidator)(properties.dbList));
    errors.collect(ros.propertyValidator('dbList', ros.hashValidator(ros.validateAny))(properties.dbList));
    errors.collect(ros.propertyValidator('fileOssUrl', ros.validateString)(properties.fileOssUrl));
    errors.collect(ros.propertyValidator('dataCheckConfigure', RosMigrationJob2_DataCheckConfigurePropertyValidator)(properties.dataCheckConfigure));
    errors.collect(ros.propertyValidator('dtsBisLabel', ros.validateString)(properties.dtsBisLabel));
    errors.collect(ros.propertyValidator('checkpoint', ros.validateString)(properties.checkpoint));
    errors.collect(ros.propertyValidator('disasterRecoveryJob', ros.validateBoolean)(properties.disasterRecoveryJob));
    errors.collect(ros.propertyValidator('dtsJobId', ros.validateString)(properties.dtsJobId));
    errors.collect(ros.propertyValidator('delayNotice', ros.validateBoolean)(properties.delayNotice));
    errors.collect(ros.propertyValidator('dataInitialization', ros.requiredValidator)(properties.dataInitialization));
    errors.collect(ros.propertyValidator('dataInitialization', ros.validateBoolean)(properties.dataInitialization));
    errors.collect(ros.propertyValidator('destinationEndpoint', ros.requiredValidator)(properties.destinationEndpoint));
    errors.collect(ros.propertyValidator('destinationEndpoint', RosMigrationJob2_DestinationEndpointPropertyValidator)(properties.destinationEndpoint));
    errors.collect(ros.propertyValidator('sourceEndpoint', ros.requiredValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('sourceEndpoint', RosMigrationJob2_SourceEndpointPropertyValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('errorPhone', ros.validateString)(properties.errorPhone));
    errors.collect(ros.propertyValidator('structureInitialization', ros.requiredValidator)(properties.structureInitialization));
    errors.collect(ros.propertyValidator('structureInitialization', ros.validateBoolean)(properties.structureInitialization));
    return errors.wrap('supplied properties not correct for "RosMigrationJob2Props"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob2` resource
 *
 * @param properties - the TypeScript properties of a `RosMigrationJob2Props`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob2` resource.
 */
// @ts-ignore TS6133
function rosMigrationJob2PropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMigrationJob2PropsValidator(properties).assertSuccess();
    }
    return {
      'DataInitialization': ros.booleanToRosTemplate(properties.dataInitialization),
      'DataSynchronization': ros.booleanToRosTemplate(properties.dataSynchronization),
      'DbList': ros.hashMapper(ros.objectToRosTemplate)(properties.dbList),
      'DestinationEndpoint': rosMigrationJob2DestinationEndpointPropertyToRosTemplate(properties.destinationEndpoint),
      'DtsJobName': ros.stringToRosTemplate(properties.dtsJobName),
      'SourceEndpoint': rosMigrationJob2SourceEndpointPropertyToRosTemplate(properties.sourceEndpoint),
      'StructureInitialization': ros.booleanToRosTemplate(properties.structureInitialization),
      'Checkpoint': ros.stringToRosTemplate(properties.checkpoint),
      'DataCheckConfigure': rosMigrationJob2DataCheckConfigurePropertyToRosTemplate(properties.dataCheckConfigure),
      'DedicatedClusterId': ros.stringToRosTemplate(properties.dedicatedClusterId),
      'DelayNotice': ros.booleanToRosTemplate(properties.delayNotice),
      'DelayPhone': ros.stringToRosTemplate(properties.delayPhone),
      'DelayRuleTime': ros.numberToRosTemplate(properties.delayRuleTime),
      'DisasterRecoveryJob': ros.booleanToRosTemplate(properties.disasterRecoveryJob),
      'DtsBisLabel': ros.stringToRosTemplate(properties.dtsBisLabel),
      'DtsInstanceId': ros.stringToRosTemplate(properties.dtsInstanceId),
      'DtsJobId': ros.stringToRosTemplate(properties.dtsJobId),
      'ErrorNotice': ros.booleanToRosTemplate(properties.errorNotice),
      'ErrorPhone': ros.stringToRosTemplate(properties.errorPhone),
      'FileOssUrl': ros.stringToRosTemplate(properties.fileOssUrl),
      'Reserve': ros.hashMapper(ros.objectToRosTemplate)(properties.reserve),
      'Status': ros.stringToRosTemplate(properties.status),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::MigrationJob2`, which is used to purchase a data migration instance and configure a data migration task of the new version.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationJob2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
 */
export class RosMigrationJob2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::MigrationJob2";

    /**
     * @Attribute DtsInstanceId: The ID of the DTS instance.
     */
    public readonly attrDtsInstanceId: ros.IResolvable;

    /**
     * @Attribute DtsJobId: The ID of the task.
     */
    public readonly attrDtsJobId: ros.IResolvable;

    /**
     * @Attribute DtsJobName: The name of the DTS job.
     */
    public readonly attrDtsJobName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
     */
    public dataInitialization: boolean | ros.IResolvable;

    /**
     * @Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
     */
    public dataSynchronization: boolean | ros.IResolvable;

    /**
     * @Property dbList: The objects that you want to migrate or synchronize.
     */
    public dbList: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property destinationEndpoint: Destination instance configuration.
     */
    public destinationEndpoint: RosMigrationJob2.DestinationEndpointProperty | ros.IResolvable;

    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    public dtsJobName: string | ros.IResolvable;

    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    public sourceEndpoint: RosMigrationJob2.SourceEndpointProperty | ros.IResolvable;

    /**
     * @Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
     */
    public structureInitialization: boolean | ros.IResolvable;

    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    public checkpoint: string | ros.IResolvable | undefined;

    /**
     * @Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
     */
    public dataCheckConfigure: RosMigrationJob2.DataCheckConfigureProperty | ros.IResolvable | undefined;

    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    public dedicatedClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    public delayNotice: boolean | ros.IResolvable | undefined;

    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    public delayPhone: string | ros.IResolvable | undefined;

    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    public delayRuleTime: number | ros.IResolvable | undefined;

    /**
     * @Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
     */
    public disasterRecoveryJob: boolean | ros.IResolvable | undefined;

    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    public dtsBisLabel: string | ros.IResolvable | undefined;

    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    public dtsInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    public dtsJobId: string | ros.IResolvable | undefined;

    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    public errorNotice: boolean | ros.IResolvable | undefined;

    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    public errorPhone: string | ros.IResolvable | undefined;

    /**
     * @Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
     */
    public fileOssUrl: string | ros.IResolvable | undefined;

    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    public reserve: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the resource. Valid values:
     * - **Migrating**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrationJob2Props, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMigrationJob2.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDtsInstanceId = this.getAtt('DtsInstanceId');
        this.attrDtsJobId = this.getAtt('DtsJobId');
        this.attrDtsJobName = this.getAtt('DtsJobName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dataInitialization = props.dataInitialization;
        this.dataSynchronization = props.dataSynchronization;
        this.dbList = props.dbList;
        this.destinationEndpoint = props.destinationEndpoint;
        this.dtsJobName = props.dtsJobName;
        this.sourceEndpoint = props.sourceEndpoint;
        this.structureInitialization = props.structureInitialization;
        this.checkpoint = props.checkpoint;
        this.dataCheckConfigure = props.dataCheckConfigure;
        this.dedicatedClusterId = props.dedicatedClusterId;
        this.delayNotice = props.delayNotice;
        this.delayPhone = props.delayPhone;
        this.delayRuleTime = props.delayRuleTime;
        this.disasterRecoveryJob = props.disasterRecoveryJob;
        this.dtsBisLabel = props.dtsBisLabel;
        this.dtsInstanceId = props.dtsInstanceId;
        this.dtsJobId = props.dtsJobId;
        this.errorNotice = props.errorNotice;
        this.errorPhone = props.errorPhone;
        this.fileOssUrl = props.fileOssUrl;
        this.reserve = props.reserve;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dataInitialization: this.dataInitialization,
            dataSynchronization: this.dataSynchronization,
            dbList: this.dbList,
            destinationEndpoint: this.destinationEndpoint,
            dtsJobName: this.dtsJobName,
            sourceEndpoint: this.sourceEndpoint,
            structureInitialization: this.structureInitialization,
            checkpoint: this.checkpoint,
            dataCheckConfigure: this.dataCheckConfigure,
            dedicatedClusterId: this.dedicatedClusterId,
            delayNotice: this.delayNotice,
            delayPhone: this.delayPhone,
            delayRuleTime: this.delayRuleTime,
            disasterRecoveryJob: this.disasterRecoveryJob,
            dtsBisLabel: this.dtsBisLabel,
            dtsInstanceId: this.dtsInstanceId,
            dtsJobId: this.dtsJobId,
            errorNotice: this.errorNotice,
            errorPhone: this.errorPhone,
            fileOssUrl: this.fileOssUrl,
            reserve: this.reserve,
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMigrationJob2PropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMigrationJob2 {
    /**
     * @stability external
     */
    export interface DataCheckConfigureProperty {
        /**
         * @Property fullCheckMaxReadRps: The maximum number of data rows that are read per second. Valid values: integers from 0 to 9007199254740991.
         */
        readonly fullCheckMaxReadRps?: number | ros.IResolvable;
        /**
         * @Property dataCheckNoticePhone: The mobile number of the alert contact for a full or incremental data verification task. If an alert is triggered for a verification task, a text message is sent to notify the alert contact.
         */
        readonly dataCheckNoticePhone?: string | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNotice: Specifies whether to trigger an alert on the data latency of the incremental data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the cumulative latency of the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly incrementalCheckDelayNotice?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticeValue: The alert threshold for the data latency of the incremental data verification task. Unit: seconds.
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticePeriod: The statistical period of an alert on the data latency of the incremental data verification task. Valid values:
     * - **1**: 1 minute
     * - **2**: 5 minutes
     * - **3**: 10 minutes
     * - **4**: 30 minutes
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticePeriod?: number | ros.IResolvable;
        /**
         * @Property dataCheckDbList: The objects whose data is to be verified. The value must be a JSON string.
         */
        readonly dataCheckDbList?: string | ros.IResolvable;
        /**
         * @Property checkMaximumHourEnable: Specifies whether to configure a timeout period for the full data verification task.Valid values:
     * - **0**: does not configure a timeout period for the full data verification task.
     * - **1**: configures a timeout period for the full data verification task.
     * **Note**: This parameter is required if the fullCheckModel parameter is set to 1.
         */
        readonly checkMaximumHourEnable?: number | ros.IResolvable;
        /**
         * @Property fullCheckRatio: The sampling ratio of the full data verification task. Valid values: integers from 10 to 100. Unit: percent.
     * **Note**: This parameter is required if the **fullCheckModel** parameter is set to 1.
         */
        readonly fullCheckRatio?: number | ros.IResolvable;
        /**
         * @Property checkMaximumHour: The timeout period of the full data verification task. Valid values: integers from 1 to 72. Countdown begins the moment the full data verification task is started. If the task is not complete within the specified timeout period, the task is forcibly stopped.
         */
        readonly checkMaximumHour?: number | ros.IResolvable;
        /**
         * @Property fullCheckFixData: Specifies whether to replace the inconsistent data. Valid values: **true** and **false**. Default value: false.
     * **Note**: For example, you set this parameter to true. If the destination database has data that is inconsistent with the data in the source database, the data values of the destination database are replaced with those of the source database.
         */
        readonly fullCheckFixData?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckModel: The mode of the full data verification task. Valid values:
     * - **1**: verifies the data by sampling ratio.
     * - **2**: verifies the data by row.
         */
        readonly fullCheckModel?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticeValue: The alert threshold for inconsistent data entries detected by the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalDataCheck: Specifies whether to perform an incremental data verification task. Valid values: **true** and **false**.
         */
        readonly incrementalDataCheck?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticeTimes: The number of statistical periods of an alert on inconsistent data entries detected by the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticeTimes?: number | ros.IResolvable;
        /**
         * @Property fullCheckMaxReadBps: The maximum number of bytes that are read per second. Valid values: integers from 0 to 9007199254740991.
         */
        readonly fullCheckMaxReadBps?: number | ros.IResolvable;
        /**
         * @Property fullCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the full data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to true. If the number of inconsistent data entries detected by the full data verification task is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly fullCheckValidFailNotice?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckErrorNotice: Specifies whether to trigger an alert if the full data verification task fails. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the full data verification task fails, an alert is triggered.
         */
        readonly fullCheckErrorNotice?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticePeriod: The statistical period of an alert on inconsistent data entries detected by the incremental data verification task. Valid values:
     * - **1**: 1 minute
     * - **2**: 5 minutes
     * - **3**: 10 minutes
     * - **4**: 30 minutes
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticePeriod?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticeTimes: The number of statistical periods of an alert on the data latency of the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticeTimes?: number | ros.IResolvable;
        /**
         * @Property fullCheckReferEndpoint: The benchmark for full data verification. Valid values:
     * - **all**: checks the data consistency between the source and destination databases based on the source and destination databases.
     * - **src**: checks the data consistency between the source and destination databases based on the source database. Objects that exist in the destination database but do not exist in the source database are not checked.
     * - **dest**: checks the data consistency between the source and destination databases based on the destination database. Objects that exist in the source database but do not exist in the destination database are not checked.
         */
        readonly fullCheckReferEndpoint?: string | ros.IResolvable;
        /**
         * @Property fullDataCheck: Specifies whether to perform a full data verification task. Valid values: **true** and **false**.
         */
        readonly fullDataCheck?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the incremental data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the cumulative number of inconsistent data entries detected by the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly incrementalCheckValidFailNotice?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckNoticeValue: The alert threshold for inconsistent data entries detected by the full data verification task.
     * **Note**: This parameter is required if the **fullCheckValidFailNotice** parameter is set to **true**.
         */
        readonly fullCheckNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckErrorNotice: Specifies whether to trigger an alert if the incremental data verification task fails. Valid values: **true** and **false**.
     * Note: For example, you set this parameter to **true**. If the incremental data verification task fails, an alert is triggered.
         */
        readonly incrementalCheckErrorNotice?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataCheckConfigureProperty`
 *
 * @param properties - the TypeScript properties of a `DataCheckConfigureProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob2_DataCheckConfigurePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.fullCheckMaxReadRps && (typeof properties.fullCheckMaxReadRps) !== 'object') {
        errors.collect(ros.propertyValidator('fullCheckMaxReadRps', ros.validateRange)({
            data: properties.fullCheckMaxReadRps,
            min: 0,
            max: 9007199254740991,
          }));
    }
    errors.collect(ros.propertyValidator('fullCheckMaxReadRps', ros.validateNumber)(properties.fullCheckMaxReadRps));
    errors.collect(ros.propertyValidator('dataCheckNoticePhone', ros.validateString)(properties.dataCheckNoticePhone));
    errors.collect(ros.propertyValidator('incrementalCheckDelayNotice', ros.validateBoolean)(properties.incrementalCheckDelayNotice));
    errors.collect(ros.propertyValidator('incrementalCheckDelayNoticeValue', ros.validateNumber)(properties.incrementalCheckDelayNoticeValue));
    if(properties.incrementalCheckDelayNoticePeriod && (typeof properties.incrementalCheckDelayNoticePeriod) !== 'object') {
        errors.collect(ros.propertyValidator('incrementalCheckDelayNoticePeriod', ros.validateAllowedValues)({
          data: properties.incrementalCheckDelayNoticePeriod,
          allowedValues: [1,2,3,4],
        }));
    }
    errors.collect(ros.propertyValidator('incrementalCheckDelayNoticePeriod', ros.validateNumber)(properties.incrementalCheckDelayNoticePeriod));
    errors.collect(ros.propertyValidator('dataCheckDbList', ros.validateString)(properties.dataCheckDbList));
    if(properties.checkMaximumHourEnable && (typeof properties.checkMaximumHourEnable) !== 'object') {
        errors.collect(ros.propertyValidator('checkMaximumHourEnable', ros.validateAllowedValues)({
          data: properties.checkMaximumHourEnable,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('checkMaximumHourEnable', ros.validateNumber)(properties.checkMaximumHourEnable));
    if(properties.fullCheckRatio && (typeof properties.fullCheckRatio) !== 'object') {
        errors.collect(ros.propertyValidator('fullCheckRatio', ros.validateRange)({
            data: properties.fullCheckRatio,
            min: 10,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('fullCheckRatio', ros.validateNumber)(properties.fullCheckRatio));
    if(properties.checkMaximumHour && (typeof properties.checkMaximumHour) !== 'object') {
        errors.collect(ros.propertyValidator('checkMaximumHour', ros.validateRange)({
            data: properties.checkMaximumHour,
            min: 1,
            max: 72,
          }));
    }
    errors.collect(ros.propertyValidator('checkMaximumHour', ros.validateNumber)(properties.checkMaximumHour));
    errors.collect(ros.propertyValidator('fullCheckFixData', ros.validateBoolean)(properties.fullCheckFixData));
    if(properties.fullCheckModel && (typeof properties.fullCheckModel) !== 'object') {
        errors.collect(ros.propertyValidator('fullCheckModel', ros.validateAllowedValues)({
          data: properties.fullCheckModel,
          allowedValues: [1,2],
        }));
    }
    errors.collect(ros.propertyValidator('fullCheckModel', ros.validateNumber)(properties.fullCheckModel));
    errors.collect(ros.propertyValidator('incrementalCheckValidFailNoticeValue', ros.validateNumber)(properties.incrementalCheckValidFailNoticeValue));
    errors.collect(ros.propertyValidator('incrementalDataCheck', ros.validateBoolean)(properties.incrementalDataCheck));
    errors.collect(ros.propertyValidator('incrementalCheckValidFailNoticeTimes', ros.validateNumber)(properties.incrementalCheckValidFailNoticeTimes));
    if(properties.fullCheckMaxReadBps && (typeof properties.fullCheckMaxReadBps) !== 'object') {
        errors.collect(ros.propertyValidator('fullCheckMaxReadBps', ros.validateRange)({
            data: properties.fullCheckMaxReadBps,
            min: 0,
            max: 9007199254740991,
          }));
    }
    errors.collect(ros.propertyValidator('fullCheckMaxReadBps', ros.validateNumber)(properties.fullCheckMaxReadBps));
    errors.collect(ros.propertyValidator('fullCheckValidFailNotice', ros.validateBoolean)(properties.fullCheckValidFailNotice));
    errors.collect(ros.propertyValidator('fullCheckErrorNotice', ros.validateBoolean)(properties.fullCheckErrorNotice));
    if(properties.incrementalCheckValidFailNoticePeriod && (typeof properties.incrementalCheckValidFailNoticePeriod) !== 'object') {
        errors.collect(ros.propertyValidator('incrementalCheckValidFailNoticePeriod', ros.validateAllowedValues)({
          data: properties.incrementalCheckValidFailNoticePeriod,
          allowedValues: [1,2,3,4],
        }));
    }
    errors.collect(ros.propertyValidator('incrementalCheckValidFailNoticePeriod', ros.validateNumber)(properties.incrementalCheckValidFailNoticePeriod));
    errors.collect(ros.propertyValidator('incrementalCheckDelayNoticeTimes', ros.validateNumber)(properties.incrementalCheckDelayNoticeTimes));
    errors.collect(ros.propertyValidator('fullCheckReferEndpoint', ros.validateString)(properties.fullCheckReferEndpoint));
    errors.collect(ros.propertyValidator('fullDataCheck', ros.validateBoolean)(properties.fullDataCheck));
    errors.collect(ros.propertyValidator('incrementalCheckValidFailNotice', ros.validateBoolean)(properties.incrementalCheckValidFailNotice));
    errors.collect(ros.propertyValidator('fullCheckNoticeValue', ros.validateNumber)(properties.fullCheckNoticeValue));
    errors.collect(ros.propertyValidator('incrementalCheckErrorNotice', ros.validateBoolean)(properties.incrementalCheckErrorNotice));
    return errors.wrap('supplied properties not correct for "DataCheckConfigureProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob2.DataCheckConfigure` resource
 *
 * @param properties - the TypeScript properties of a `DataCheckConfigureProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob2.DataCheckConfigure` resource.
 */
// @ts-ignore TS6133
function rosMigrationJob2DataCheckConfigurePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob2_DataCheckConfigurePropertyValidator(properties).assertSuccess();
    return {
      'fullCheckMaxReadRps': ros.numberToRosTemplate(properties.fullCheckMaxReadRps),
      'dataCheckNoticePhone': ros.stringToRosTemplate(properties.dataCheckNoticePhone),
      'incrementalCheckDelayNotice': ros.booleanToRosTemplate(properties.incrementalCheckDelayNotice),
      'incrementalCheckDelayNoticeValue': ros.numberToRosTemplate(properties.incrementalCheckDelayNoticeValue),
      'incrementalCheckDelayNoticePeriod': ros.numberToRosTemplate(properties.incrementalCheckDelayNoticePeriod),
      'dataCheckDbList': ros.stringToRosTemplate(properties.dataCheckDbList),
      'checkMaximumHourEnable': ros.numberToRosTemplate(properties.checkMaximumHourEnable),
      'fullCheckRatio': ros.numberToRosTemplate(properties.fullCheckRatio),
      'checkMaximumHour': ros.numberToRosTemplate(properties.checkMaximumHour),
      'fullCheckFixData': ros.booleanToRosTemplate(properties.fullCheckFixData),
      'fullCheckModel': ros.numberToRosTemplate(properties.fullCheckModel),
      'incrementalCheckValidFailNoticeValue': ros.numberToRosTemplate(properties.incrementalCheckValidFailNoticeValue),
      'incrementalDataCheck': ros.booleanToRosTemplate(properties.incrementalDataCheck),
      'incrementalCheckValidFailNoticeTimes': ros.numberToRosTemplate(properties.incrementalCheckValidFailNoticeTimes),
      'fullCheckMaxReadBps': ros.numberToRosTemplate(properties.fullCheckMaxReadBps),
      'fullCheckValidFailNotice': ros.booleanToRosTemplate(properties.fullCheckValidFailNotice),
      'fullCheckErrorNotice': ros.booleanToRosTemplate(properties.fullCheckErrorNotice),
      'incrementalCheckValidFailNoticePeriod': ros.numberToRosTemplate(properties.incrementalCheckValidFailNoticePeriod),
      'incrementalCheckDelayNoticeTimes': ros.numberToRosTemplate(properties.incrementalCheckDelayNoticeTimes),
      'fullCheckReferEndpoint': ros.stringToRosTemplate(properties.fullCheckReferEndpoint),
      'fullDataCheck': ros.booleanToRosTemplate(properties.fullDataCheck),
      'incrementalCheckValidFailNotice': ros.booleanToRosTemplate(properties.incrementalCheckValidFailNotice),
      'fullCheckNoticeValue': ros.numberToRosTemplate(properties.fullCheckNoticeValue),
      'incrementalCheckErrorNotice': ros.booleanToRosTemplate(properties.incrementalCheckErrorNotice),
    };
}

export namespace RosMigrationJob2 {
    /**
     * @stability external
     */
    export interface DestinationEndpointProperty {
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the destination instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the destination database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the destination database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the destination instance. If the destination instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example, 
     * - If the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance. 
     * - If the destination instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the destination instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the destination instance. 
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the destination instance.
     * **Note**: This parameter is required only when the destination instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the destination instance.
     * **Note**: This parameter is required only when the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the destination instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the destination instance. Valid values:
     * Alibaba Cloud database instances
     * - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **REDIS**: ApsaraDB for Redis instance
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster
     * - **MONGODB**: ApsaraDB for MongoDB instance
     * - **GREENPLUM**: AnalyticDB for PostgreSQL instance
     * - **DATAHUB**: DataHub project
     * - **ELK**: Elasticsearch cluster
     * - **Tablestore**: Tablestore instance
     * - **ODPS**: MaxCompute project
     * Self-managed databases
     * - **OTHER**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an ECS instance
     * - **EXPRESS**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over CEN
     * - **DG**: self-managed database connected over Database Gateway
     * **Note**: If the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to OTHER or EXPRESS. Then, you can connect the PolarDB for PostgreSQL cluster (compatible with Oracle) to DTS as a self-managed database by using a public IP address or Express Connect.
     * If the destination instance is a Message Queue for Apache Kafka instance, you must set this parameter to ECS or EXPRESS. Then, you can connect the Message Queue for Apache Kafka instance to DTS as a self-managed database connected over ECS or Express Connect.
     * If the destination instance is a self-managed database, you must deploy the network environment for the database.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property engineName: The database engine of the destination instance. Valid values:
     * - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
     * - **POLARDBX10**: PolarDB-X 1.0 instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **ORACLE**: self-managed Oracle database
     * - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster- **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **GREENPLUM**: AnalyticDB for PostgreSQL instance
     * - **KAFKA**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DATAHUB**: DataHub project- **DB2**: self-managed Db2 for LUW database
     * - **AS400**: self-managed Db2 for i database
     * - **ODPS**: MaxCompute project
     * - **Tablestore**: Tablestore instance
     * - **ELK**: Elasticsearch cluster
     * - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
     * **Note**: Default value: **MYSQL**.
     * If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in the Reserve parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property password: The password of the destination database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DestinationEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `DestinationEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob2_DestinationEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('oracleSid', ros.validateString)(properties.oracleSid));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('ownerId', ros.validateString)(properties.ownerId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('databaseName', ros.validateString)(properties.databaseName));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('engineName', ros.validateString)(properties.engineName));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "DestinationEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob2.DestinationEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `DestinationEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob2.DestinationEndpoint` resource.
 */
// @ts-ignore TS6133
function rosMigrationJob2DestinationEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob2_DestinationEndpointPropertyValidator(properties).assertSuccess();
    return {
      'Role': ros.stringToRosTemplate(properties.role),
      'OracleSID': ros.stringToRosTemplate(properties.oracleSid),
      'UserName': ros.stringToRosTemplate(properties.userName),
      'OwnerID': ros.stringToRosTemplate(properties.ownerId),
      'InstanceID': ros.stringToRosTemplate(properties.instanceId),
      'IP': ros.stringToRosTemplate(properties.ip),
      'Port': ros.stringToRosTemplate(properties.port),
      'DatabaseName': ros.stringToRosTemplate(properties.databaseName),
      'Region': ros.stringToRosTemplate(properties.region),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'EngineName': ros.stringToRosTemplate(properties.engineName),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosMigrationJob2 {
    /**
     * @stability external
     */
    export interface SourceEndpointProperty {
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the source database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example, 
     * - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance. 
     * - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the source instance. 
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the source instance.
     * **Note**: This parameter is required only when the source instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch used for the data shipping link.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the source instance.
     * **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property engineName: The database engine of the source instance. Valid values:
     * - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
     * - **POLARDBX10**: PolarDB-X 1.0 instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **ORACLE**: self-managed Oracle database
     * - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **DB2**: self-managed Db2 for LUW database
     * - **AS400**: self-managed Db2 for i database
     * - **DMSPOLARDB**: DMS logical database
     * - **HBASE**: self-managed HBase database
     * - **TERADATA**: Teradata database
     * - **TiDB**: TiDB database
     * - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
     * **Note**: Default value: **MYSQL**.
     * If EngineName is set to **MONGODB**, you must also specify the architecture type of the **MongoDB** database in the **Reserve** parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the source instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the source instance. Valid values:
     * Alibaba Cloud database instances:
     * - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **REDIS**: ApsaraDB for Redis instance
     * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **MONGODB**: ApsaraDB for MongoDB instance
     * - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
     * Self-managed databases:
     * - **OTHER**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
     * - **EXPRESS**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
     * - **DG**: self-managed database connected over Database Gateway
     * **Note**: If the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to **OTHER** or **EXPRESS**. Then, you can connect the PolarDB for PostgreSQL cluster to DTS as a self-managed database by using a public IP address or Express Connect. If the source instance is a self-managed database, you must deploy the network environment for the database.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property password: The password of the source database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosMigrationJob2_SourceEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oracleSid', ros.validateString)(properties.oracleSid));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('databaseName', ros.validateString)(properties.databaseName));
    errors.collect(ros.propertyValidator('engineName', ros.validateString)(properties.engineName));
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('ownerId', ros.validateString)(properties.ownerId));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "SourceEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob2.SourceEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::MigrationJob2.SourceEndpoint` resource.
 */
// @ts-ignore TS6133
function rosMigrationJob2SourceEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMigrationJob2_SourceEndpointPropertyValidator(properties).assertSuccess();
    return {
      'OracleSID': ros.stringToRosTemplate(properties.oracleSid),
      'UserName': ros.stringToRosTemplate(properties.userName),
      'InstanceID': ros.stringToRosTemplate(properties.instanceId),
      'IP': ros.stringToRosTemplate(properties.ip),
      'Port': ros.stringToRosTemplate(properties.port),
      'VSwitchID': ros.stringToRosTemplate(properties.vSwitchId),
      'DatabaseName': ros.stringToRosTemplate(properties.databaseName),
      'EngineName': ros.stringToRosTemplate(properties.engineName),
      'Role': ros.stringToRosTemplate(properties.role),
      'OwnerID': ros.stringToRosTemplate(properties.ownerId),
      'Region': ros.stringToRosTemplate(properties.region),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

/**
 * Properties for defining a `RosSubscriptionJob2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
 */
export interface RosSubscriptionJob2Props {

    /**
     * @Property dbList: The objects for which you want to track data changes.
     */
    readonly dbList: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    readonly dtsJobName: string | ros.IResolvable;

    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    readonly sourceEndpoint: RosSubscriptionJob2.SourceEndpointProperty | ros.IResolvable;

    /**
     * @Property subscriptionInstance: Subscription instance configuration.
     */
    readonly subscriptionInstance: RosSubscriptionJob2.SubscriptionInstanceProperty | ros.IResolvable;

    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly checkpoint?: string | ros.IResolvable;

    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    readonly dedicatedClusterId?: string | ros.IResolvable;

    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    readonly delayNotice?: boolean | ros.IResolvable;

    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    readonly delayPhone?: string | ros.IResolvable;

    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    readonly delayRuleTime?: number | ros.IResolvable;

    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    readonly dtsBisLabel?: string | ros.IResolvable;

    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;

    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    readonly dtsJobId?: string | ros.IResolvable;

    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    readonly errorNotice?: boolean | ros.IResolvable;

    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    readonly errorPhone?: string | ros.IResolvable;

    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    readonly reserve?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property status: The status of the resource. Valid values:
     * - **Subscribing**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property subscriptionDataType: Subscription data type.
     */
    readonly subscriptionDataType?: RosSubscriptionJob2.SubscriptionDataTypeProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSubscriptionJob2Props`
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionJob2Props`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionJob2PropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Subscribing","Suspending","Stopping"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('reserve', ros.hashValidator(ros.validateAny))(properties.reserve));
    errors.collect(ros.propertyValidator('delayPhone', ros.validateString)(properties.delayPhone));
    errors.collect(ros.propertyValidator('dedicatedClusterId', ros.validateString)(properties.dedicatedClusterId));
    errors.collect(ros.propertyValidator('errorNotice', ros.validateBoolean)(properties.errorNotice));
    errors.collect(ros.propertyValidator('dtsJobName', ros.requiredValidator)(properties.dtsJobName));
    errors.collect(ros.propertyValidator('dtsJobName', ros.validateString)(properties.dtsJobName));
    errors.collect(ros.propertyValidator('delayRuleTime', ros.validateNumber)(properties.delayRuleTime));
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.validateString)(properties.dtsInstanceId));
    errors.collect(ros.propertyValidator('dbList', ros.requiredValidator)(properties.dbList));
    errors.collect(ros.propertyValidator('dbList', ros.hashValidator(ros.validateAny))(properties.dbList));
    errors.collect(ros.propertyValidator('dtsBisLabel', ros.validateString)(properties.dtsBisLabel));
    errors.collect(ros.propertyValidator('subscriptionDataType', RosSubscriptionJob2_SubscriptionDataTypePropertyValidator)(properties.subscriptionDataType));
    errors.collect(ros.propertyValidator('checkpoint', ros.validateString)(properties.checkpoint));
    errors.collect(ros.propertyValidator('delayNotice', ros.validateBoolean)(properties.delayNotice));
    errors.collect(ros.propertyValidator('dtsJobId', ros.validateString)(properties.dtsJobId));
    errors.collect(ros.propertyValidator('subscriptionInstance', ros.requiredValidator)(properties.subscriptionInstance));
    errors.collect(ros.propertyValidator('subscriptionInstance', RosSubscriptionJob2_SubscriptionInstancePropertyValidator)(properties.subscriptionInstance));
    errors.collect(ros.propertyValidator('sourceEndpoint', ros.requiredValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('sourceEndpoint', RosSubscriptionJob2_SourceEndpointPropertyValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('errorPhone', ros.validateString)(properties.errorPhone));
    return errors.wrap('supplied properties not correct for "RosSubscriptionJob2Props"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionJob2` resource
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionJob2Props`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionJob2` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionJob2PropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSubscriptionJob2PropsValidator(properties).assertSuccess();
    }
    return {
      'DbList': ros.hashMapper(ros.objectToRosTemplate)(properties.dbList),
      'DtsJobName': ros.stringToRosTemplate(properties.dtsJobName),
      'SourceEndpoint': rosSubscriptionJob2SourceEndpointPropertyToRosTemplate(properties.sourceEndpoint),
      'SubscriptionInstance': rosSubscriptionJob2SubscriptionInstancePropertyToRosTemplate(properties.subscriptionInstance),
      'Checkpoint': ros.stringToRosTemplate(properties.checkpoint),
      'DedicatedClusterId': ros.stringToRosTemplate(properties.dedicatedClusterId),
      'DelayNotice': ros.booleanToRosTemplate(properties.delayNotice),
      'DelayPhone': ros.stringToRosTemplate(properties.delayPhone),
      'DelayRuleTime': ros.numberToRosTemplate(properties.delayRuleTime),
      'DtsBisLabel': ros.stringToRosTemplate(properties.dtsBisLabel),
      'DtsInstanceId': ros.stringToRosTemplate(properties.dtsInstanceId),
      'DtsJobId': ros.stringToRosTemplate(properties.dtsJobId),
      'ErrorNotice': ros.booleanToRosTemplate(properties.errorNotice),
      'ErrorPhone': ros.stringToRosTemplate(properties.errorPhone),
      'Reserve': ros.hashMapper(ros.objectToRosTemplate)(properties.reserve),
      'Status': ros.stringToRosTemplate(properties.status),
      'SubscriptionDataType': rosSubscriptionJob2SubscriptionDataTypePropertyToRosTemplate(properties.subscriptionDataType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::SubscriptionJob2`, which is used to configure a change tracking task.
 * @Note This class does not contain additional functions, so it is recommended to use the `SubscriptionJob2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
 */
export class RosSubscriptionJob2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::SubscriptionJob2";

    /**
     * @Attribute DtsInstanceId: The ID of the DTS instance.
     */
    public readonly attrDtsInstanceId: ros.IResolvable;

    /**
     * @Attribute DtsJobId: The ID of the task.
     */
    public readonly attrDtsJobId: ros.IResolvable;

    /**
     * @Attribute DtsJobName: The name of the DTS job.
     */
    public readonly attrDtsJobName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbList: The objects for which you want to track data changes.
     */
    public dbList: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    public dtsJobName: string | ros.IResolvable;

    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    public sourceEndpoint: RosSubscriptionJob2.SourceEndpointProperty | ros.IResolvable;

    /**
     * @Property subscriptionInstance: Subscription instance configuration.
     */
    public subscriptionInstance: RosSubscriptionJob2.SubscriptionInstanceProperty | ros.IResolvable;

    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    public checkpoint: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    public dedicatedClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    public delayNotice: boolean | ros.IResolvable | undefined;

    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    public delayPhone: string | ros.IResolvable | undefined;

    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    public delayRuleTime: number | ros.IResolvable | undefined;

    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    public dtsBisLabel: string | ros.IResolvable | undefined;

    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    public dtsInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    public dtsJobId: string | ros.IResolvable | undefined;

    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    public errorNotice: boolean | ros.IResolvable | undefined;

    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    public errorPhone: string | ros.IResolvable | undefined;

    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    public reserve: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the resource. Valid values:
     * - **Subscribing**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property subscriptionDataType: Subscription data type.
     */
    public subscriptionDataType: RosSubscriptionJob2.SubscriptionDataTypeProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionJob2Props, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSubscriptionJob2.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDtsInstanceId = this.getAtt('DtsInstanceId');
        this.attrDtsJobId = this.getAtt('DtsJobId');
        this.attrDtsJobName = this.getAtt('DtsJobName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbList = props.dbList;
        this.dtsJobName = props.dtsJobName;
        this.sourceEndpoint = props.sourceEndpoint;
        this.subscriptionInstance = props.subscriptionInstance;
        this.checkpoint = props.checkpoint;
        this.dedicatedClusterId = props.dedicatedClusterId;
        this.delayNotice = props.delayNotice;
        this.delayPhone = props.delayPhone;
        this.delayRuleTime = props.delayRuleTime;
        this.dtsBisLabel = props.dtsBisLabel;
        this.dtsInstanceId = props.dtsInstanceId;
        this.dtsJobId = props.dtsJobId;
        this.errorNotice = props.errorNotice;
        this.errorPhone = props.errorPhone;
        this.reserve = props.reserve;
        this.status = props.status;
        this.subscriptionDataType = props.subscriptionDataType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbList: this.dbList,
            dtsJobName: this.dtsJobName,
            sourceEndpoint: this.sourceEndpoint,
            subscriptionInstance: this.subscriptionInstance,
            checkpoint: this.checkpoint,
            dedicatedClusterId: this.dedicatedClusterId,
            delayNotice: this.delayNotice,
            delayPhone: this.delayPhone,
            delayRuleTime: this.delayRuleTime,
            dtsBisLabel: this.dtsBisLabel,
            dtsInstanceId: this.dtsInstanceId,
            dtsJobId: this.dtsJobId,
            errorNotice: this.errorNotice,
            errorPhone: this.errorPhone,
            reserve: this.reserve,
            status: this.status,
            subscriptionDataType: this.subscriptionDataType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSubscriptionJob2PropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSubscriptionJob2 {
    /**
     * @stability external
     */
    export interface SourceEndpointProperty {
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the source database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example, 
     * - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance. 
     * - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the source instance. 
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the source instance.
     * **Note**: This parameter is required only when the source instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch used for the data shipping link.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the source instance.
     * **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property engineName: The engine of the source database. Valid values: **MySQL**, **PostgreSQL**, and **Oracle**.
     * **Note**: If the source database is a self-managed database, you must specify this parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the source instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the source instance. Valid values:
     * - **RDS**: ApsaraDB RDS for MySQL instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **DRDS**: PolarDB-X 1.0 instance
     * - **LocalInstance**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
     * - **Express**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
     * - **dg**: self-managed database connected over Database Gateway
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property password: The password of the source database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionJob2_SourceEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oracleSid', ros.validateString)(properties.oracleSid));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('databaseName', ros.validateString)(properties.databaseName));
    errors.collect(ros.propertyValidator('engineName', ros.validateString)(properties.engineName));
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('ownerId', ros.validateString)(properties.ownerId));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "SourceEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionJob2.SourceEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionJob2.SourceEndpoint` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionJob2SourceEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSubscriptionJob2_SourceEndpointPropertyValidator(properties).assertSuccess();
    return {
      'OracleSID': ros.stringToRosTemplate(properties.oracleSid),
      'UserName': ros.stringToRosTemplate(properties.userName),
      'InstanceID': ros.stringToRosTemplate(properties.instanceId),
      'IP': ros.stringToRosTemplate(properties.ip),
      'Port': ros.stringToRosTemplate(properties.port),
      'VSwitchID': ros.stringToRosTemplate(properties.vSwitchId),
      'DatabaseName': ros.stringToRosTemplate(properties.databaseName),
      'EngineName': ros.stringToRosTemplate(properties.engineName),
      'Role': ros.stringToRosTemplate(properties.role),
      'OwnerID': ros.stringToRosTemplate(properties.ownerId),
      'Region': ros.stringToRosTemplate(properties.region),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosSubscriptionJob2 {
    /**
     * @stability external
     */
    export interface SubscriptionDataTypeProperty {
        /**
         * @Property dml: Specifies whether to track DML statements. Default value: true. Valid values:
     * - **true**: tracks DML statements.
     * - **false**: does not track DML statements.
         */
        readonly dml?: boolean | ros.IResolvable;
        /**
         * @Property ddl: Specifies whether to track DDL statements. Default value: true. Valid values:
     * - **true**: tracks DDL statements.
     * - **false**: does not track DDL statements.
         */
        readonly ddl?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SubscriptionDataTypeProperty`
 *
 * @param properties - the TypeScript properties of a `SubscriptionDataTypeProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionJob2_SubscriptionDataTypePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dml', ros.validateBoolean)(properties.dml));
    errors.collect(ros.propertyValidator('ddl', ros.validateBoolean)(properties.ddl));
    return errors.wrap('supplied properties not correct for "SubscriptionDataTypeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionJob2.SubscriptionDataType` resource
 *
 * @param properties - the TypeScript properties of a `SubscriptionDataTypeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionJob2.SubscriptionDataType` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionJob2SubscriptionDataTypePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSubscriptionJob2_SubscriptionDataTypePropertyValidator(properties).assertSuccess();
    return {
      'DML': ros.booleanToRosTemplate(properties.dml),
      'DDL': ros.booleanToRosTemplate(properties.ddl),
    };
}

export namespace RosSubscriptionJob2 {
    /**
     * @stability external
     */
    export interface SubscriptionInstanceProperty {
        /**
         * @Property vpcId: The ID of the VPC in which the change tracking instance is deployed.
     * **Note**: This parameter takes effect and is required only when **NetworkType** is set to **vpc**.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property networkType: The network type of the change tracking task. Set the value to **vpc**. A value of vpc indicates the Virtual Private Cloud (VPC) network type.**Note**:
     * - To use the new version of the change tracking feature, you must specify **NetworkType**. You must also specify **VPCId** and **VSwitchID**. If you do not specify **NetworkType**, the previous version of the change tracking feature is used.
     * - The previous version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, and PolarDB-X 1.0 instances. The new version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and Oracle databases.
         */
        readonly networkType: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch in the specified VPC.
     * **Note**: This parameter takes effect and is required only when **NetworkType** is set to **vpc**.
         */
        readonly vSwitchId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SubscriptionInstanceProperty`
 *
 * @param properties - the TypeScript properties of a `SubscriptionInstanceProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionJob2_SubscriptionInstancePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('networkType', ros.requiredValidator)(properties.networkType));
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "SubscriptionInstanceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionJob2.SubscriptionInstance` resource
 *
 * @param properties - the TypeScript properties of a `SubscriptionInstanceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SubscriptionJob2.SubscriptionInstance` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionJob2SubscriptionInstancePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSubscriptionJob2_SubscriptionInstancePropertyValidator(properties).assertSuccess();
    return {
      'VPCId': ros.stringToRosTemplate(properties.vpcId),
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * Properties for defining a `RosSynchronizationJob2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2
 */
export interface RosSynchronizationJob2Props {

    /**
     * @Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
     */
    readonly dataInitialization: boolean | ros.IResolvable;

    /**
     * @Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
     */
    readonly dataSynchronization: boolean | ros.IResolvable;

    /**
     * @Property dbList: The objects that you want to migrate or synchronize.
     */
    readonly dbList: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property destinationEndpoint: Destination instance configuration.
     */
    readonly destinationEndpoint: RosSynchronizationJob2.DestinationEndpointProperty | ros.IResolvable;

    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    readonly dtsJobName: string | ros.IResolvable;

    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    readonly sourceEndpoint: RosSynchronizationJob2.SourceEndpointProperty | ros.IResolvable;

    /**
     * @Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
     */
    readonly structureInitialization: boolean | ros.IResolvable;

    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly checkpoint?: string | ros.IResolvable;

    /**
     * @Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
     */
    readonly dataCheckConfigure?: RosSynchronizationJob2.DataCheckConfigureProperty | ros.IResolvable;

    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    readonly dedicatedClusterId?: string | ros.IResolvable;

    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    readonly delayNotice?: boolean | ros.IResolvable;

    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    readonly delayPhone?: string | ros.IResolvable;

    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    readonly delayRuleTime?: number | ros.IResolvable;

    /**
     * @Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
     */
    readonly disasterRecoveryJob?: boolean | ros.IResolvable;

    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    readonly dtsBisLabel?: string | ros.IResolvable;

    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;

    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    readonly dtsJobId?: string | ros.IResolvable;

    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    readonly errorNotice?: boolean | ros.IResolvable;

    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    readonly errorPhone?: string | ros.IResolvable;

    /**
     * @Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
     */
    readonly fileOssUrl?: string | ros.IResolvable;

    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    readonly reserve?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property status: The status of the resource. Valid values:
     * - **Synchronizing**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property synchronizationDirection: The synchronization direction. Default value: Forward. Valid values:
     * - **Forward**: Data is synchronized from the source database to the destination database.
     * - **Reverse**: Data is synchronized from the destination database to the source database.
     * **Note**: The default value is **Forward**.
     * The value Reverse takes effect only if the topology of the data synchronization task is two-way synchronization.
     */
    readonly synchronizationDirection?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSynchronizationJob2Props`
 *
 * @param properties - the TypeScript properties of a `RosSynchronizationJob2Props`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob2PropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Synchronizing","Suspending","Stopping"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('reserve', ros.hashValidator(ros.validateAny))(properties.reserve));
    errors.collect(ros.propertyValidator('dataSynchronization', ros.requiredValidator)(properties.dataSynchronization));
    errors.collect(ros.propertyValidator('dataSynchronization', ros.validateBoolean)(properties.dataSynchronization));
    errors.collect(ros.propertyValidator('delayPhone', ros.validateString)(properties.delayPhone));
    errors.collect(ros.propertyValidator('dedicatedClusterId', ros.validateString)(properties.dedicatedClusterId));
    errors.collect(ros.propertyValidator('errorNotice', ros.validateBoolean)(properties.errorNotice));
    errors.collect(ros.propertyValidator('dtsJobName', ros.requiredValidator)(properties.dtsJobName));
    errors.collect(ros.propertyValidator('dtsJobName', ros.validateString)(properties.dtsJobName));
    errors.collect(ros.propertyValidator('delayRuleTime', ros.validateNumber)(properties.delayRuleTime));
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.validateString)(properties.dtsInstanceId));
    errors.collect(ros.propertyValidator('dbList', ros.requiredValidator)(properties.dbList));
    errors.collect(ros.propertyValidator('dbList', ros.hashValidator(ros.validateAny))(properties.dbList));
    errors.collect(ros.propertyValidator('fileOssUrl', ros.validateString)(properties.fileOssUrl));
    errors.collect(ros.propertyValidator('dataCheckConfigure', RosSynchronizationJob2_DataCheckConfigurePropertyValidator)(properties.dataCheckConfigure));
    errors.collect(ros.propertyValidator('dtsBisLabel', ros.validateString)(properties.dtsBisLabel));
    errors.collect(ros.propertyValidator('checkpoint', ros.validateString)(properties.checkpoint));
    errors.collect(ros.propertyValidator('disasterRecoveryJob', ros.validateBoolean)(properties.disasterRecoveryJob));
    errors.collect(ros.propertyValidator('dtsJobId', ros.validateString)(properties.dtsJobId));
    errors.collect(ros.propertyValidator('delayNotice', ros.validateBoolean)(properties.delayNotice));
    errors.collect(ros.propertyValidator('dataInitialization', ros.requiredValidator)(properties.dataInitialization));
    errors.collect(ros.propertyValidator('dataInitialization', ros.validateBoolean)(properties.dataInitialization));
    errors.collect(ros.propertyValidator('destinationEndpoint', ros.requiredValidator)(properties.destinationEndpoint));
    errors.collect(ros.propertyValidator('destinationEndpoint', RosSynchronizationJob2_DestinationEndpointPropertyValidator)(properties.destinationEndpoint));
    errors.collect(ros.propertyValidator('sourceEndpoint', ros.requiredValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('sourceEndpoint', RosSynchronizationJob2_SourceEndpointPropertyValidator)(properties.sourceEndpoint));
    errors.collect(ros.propertyValidator('errorPhone', ros.validateString)(properties.errorPhone));
    errors.collect(ros.propertyValidator('structureInitialization', ros.requiredValidator)(properties.structureInitialization));
    errors.collect(ros.propertyValidator('structureInitialization', ros.validateBoolean)(properties.structureInitialization));
    errors.collect(ros.propertyValidator('synchronizationDirection', ros.validateString)(properties.synchronizationDirection));
    return errors.wrap('supplied properties not correct for "RosSynchronizationJob2Props"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob2` resource
 *
 * @param properties - the TypeScript properties of a `RosSynchronizationJob2Props`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob2` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJob2PropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSynchronizationJob2PropsValidator(properties).assertSuccess();
    }
    return {
      'DataInitialization': ros.booleanToRosTemplate(properties.dataInitialization),
      'DataSynchronization': ros.booleanToRosTemplate(properties.dataSynchronization),
      'DbList': ros.hashMapper(ros.objectToRosTemplate)(properties.dbList),
      'DestinationEndpoint': rosSynchronizationJob2DestinationEndpointPropertyToRosTemplate(properties.destinationEndpoint),
      'DtsJobName': ros.stringToRosTemplate(properties.dtsJobName),
      'SourceEndpoint': rosSynchronizationJob2SourceEndpointPropertyToRosTemplate(properties.sourceEndpoint),
      'StructureInitialization': ros.booleanToRosTemplate(properties.structureInitialization),
      'Checkpoint': ros.stringToRosTemplate(properties.checkpoint),
      'DataCheckConfigure': rosSynchronizationJob2DataCheckConfigurePropertyToRosTemplate(properties.dataCheckConfigure),
      'DedicatedClusterId': ros.stringToRosTemplate(properties.dedicatedClusterId),
      'DelayNotice': ros.booleanToRosTemplate(properties.delayNotice),
      'DelayPhone': ros.stringToRosTemplate(properties.delayPhone),
      'DelayRuleTime': ros.numberToRosTemplate(properties.delayRuleTime),
      'DisasterRecoveryJob': ros.booleanToRosTemplate(properties.disasterRecoveryJob),
      'DtsBisLabel': ros.stringToRosTemplate(properties.dtsBisLabel),
      'DtsInstanceId': ros.stringToRosTemplate(properties.dtsInstanceId),
      'DtsJobId': ros.stringToRosTemplate(properties.dtsJobId),
      'ErrorNotice': ros.booleanToRosTemplate(properties.errorNotice),
      'ErrorPhone': ros.stringToRosTemplate(properties.errorPhone),
      'FileOssUrl': ros.stringToRosTemplate(properties.fileOssUrl),
      'Reserve': ros.hashMapper(ros.objectToRosTemplate)(properties.reserve),
      'Status': ros.stringToRosTemplate(properties.status),
      'SynchronizationDirection': ros.stringToRosTemplate(properties.synchronizationDirection),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DTS::SynchronizationJob2`, which is used to configure a data synchronization task.
 * @Note This class does not contain additional functions, so it is recommended to use the `SynchronizationJob2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2
 */
export class RosSynchronizationJob2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DTS::SynchronizationJob2";

    /**
     * @Attribute DtsInstanceId: The ID of the DTS instance.
     */
    public readonly attrDtsInstanceId: ros.IResolvable;

    /**
     * @Attribute DtsJobId: The ID of the task.
     */
    public readonly attrDtsJobId: ros.IResolvable;

    /**
     * @Attribute DtsJobName: The name of the DTS job.
     */
    public readonly attrDtsJobName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
     */
    public dataInitialization: boolean | ros.IResolvable;

    /**
     * @Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
     */
    public dataSynchronization: boolean | ros.IResolvable;

    /**
     * @Property dbList: The objects that you want to migrate or synchronize.
     */
    public dbList: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property destinationEndpoint: Destination instance configuration.
     */
    public destinationEndpoint: RosSynchronizationJob2.DestinationEndpointProperty | ros.IResolvable;

    /**
     * @Property dtsJobName: The name of the DTS instance.
     */
    public dtsJobName: string | ros.IResolvable;

    /**
     * @Property sourceEndpoint: Source instance configuration.
     */
    public sourceEndpoint: RosSynchronizationJob2.SourceEndpointProperty | ros.IResolvable;

    /**
     * @Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
     */
    public structureInitialization: boolean | ros.IResolvable;

    /**
     * @Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    public checkpoint: string | ros.IResolvable | undefined;

    /**
     * @Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
     */
    public dataCheckConfigure: RosSynchronizationJob2.DataCheckConfigureProperty | ros.IResolvable | undefined;

    /**
     * @Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    public dedicatedClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    public delayNotice: boolean | ros.IResolvable | undefined;

    /**
     * @Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    public delayPhone: string | ros.IResolvable | undefined;

    /**
     * @Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    public delayRuleTime: number | ros.IResolvable | undefined;

    /**
     * @Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
     */
    public disasterRecoveryJob: boolean | ros.IResolvable | undefined;

    /**
     * @Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    public dtsBisLabel: string | ros.IResolvable | undefined;

    /**
     * @Property dtsInstanceId: The ID of the DTS instance.
     */
    public dtsInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property dtsJobId: The ID of the DTS task.
     */
    public dtsJobId: string | ros.IResolvable | undefined;

    /**
     * @Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    public errorNotice: boolean | ros.IResolvable | undefined;

    /**
     * @Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    public errorPhone: string | ros.IResolvable | undefined;

    /**
     * @Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
     */
    public fileOssUrl: string | ros.IResolvable | undefined;

    /**
     * @Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    public reserve: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the resource. Valid values:
     * - **Synchronizing**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property synchronizationDirection: The synchronization direction. Default value: Forward. Valid values:
     * - **Forward**: Data is synchronized from the source database to the destination database.
     * - **Reverse**: Data is synchronized from the destination database to the source database.
     * **Note**: The default value is **Forward**.
     * The value Reverse takes effect only if the topology of the data synchronization task is two-way synchronization.
     */
    public synchronizationDirection: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSynchronizationJob2Props, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSynchronizationJob2.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDtsInstanceId = this.getAtt('DtsInstanceId');
        this.attrDtsJobId = this.getAtt('DtsJobId');
        this.attrDtsJobName = this.getAtt('DtsJobName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dataInitialization = props.dataInitialization;
        this.dataSynchronization = props.dataSynchronization;
        this.dbList = props.dbList;
        this.destinationEndpoint = props.destinationEndpoint;
        this.dtsJobName = props.dtsJobName;
        this.sourceEndpoint = props.sourceEndpoint;
        this.structureInitialization = props.structureInitialization;
        this.checkpoint = props.checkpoint;
        this.dataCheckConfigure = props.dataCheckConfigure;
        this.dedicatedClusterId = props.dedicatedClusterId;
        this.delayNotice = props.delayNotice;
        this.delayPhone = props.delayPhone;
        this.delayRuleTime = props.delayRuleTime;
        this.disasterRecoveryJob = props.disasterRecoveryJob;
        this.dtsBisLabel = props.dtsBisLabel;
        this.dtsInstanceId = props.dtsInstanceId;
        this.dtsJobId = props.dtsJobId;
        this.errorNotice = props.errorNotice;
        this.errorPhone = props.errorPhone;
        this.fileOssUrl = props.fileOssUrl;
        this.reserve = props.reserve;
        this.status = props.status;
        this.synchronizationDirection = props.synchronizationDirection;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dataInitialization: this.dataInitialization,
            dataSynchronization: this.dataSynchronization,
            dbList: this.dbList,
            destinationEndpoint: this.destinationEndpoint,
            dtsJobName: this.dtsJobName,
            sourceEndpoint: this.sourceEndpoint,
            structureInitialization: this.structureInitialization,
            checkpoint: this.checkpoint,
            dataCheckConfigure: this.dataCheckConfigure,
            dedicatedClusterId: this.dedicatedClusterId,
            delayNotice: this.delayNotice,
            delayPhone: this.delayPhone,
            delayRuleTime: this.delayRuleTime,
            disasterRecoveryJob: this.disasterRecoveryJob,
            dtsBisLabel: this.dtsBisLabel,
            dtsInstanceId: this.dtsInstanceId,
            dtsJobId: this.dtsJobId,
            errorNotice: this.errorNotice,
            errorPhone: this.errorPhone,
            fileOssUrl: this.fileOssUrl,
            reserve: this.reserve,
            status: this.status,
            synchronizationDirection: this.synchronizationDirection,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSynchronizationJob2PropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSynchronizationJob2 {
    /**
     * @stability external
     */
    export interface DataCheckConfigureProperty {
        /**
         * @Property fullCheckMaxReadRps: The maximum number of data rows that are read per second. Valid values: integers from 0 to 9007199254740991.
         */
        readonly fullCheckMaxReadRps?: number | ros.IResolvable;
        /**
         * @Property dataCheckNoticePhone: The mobile number of the alert contact for a full or incremental data verification task. If an alert is triggered for a verification task, a text message is sent to notify the alert contact.
         */
        readonly dataCheckNoticePhone?: string | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNotice: Specifies whether to trigger an alert on the data latency of the incremental data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the cumulative latency of the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly incrementalCheckDelayNotice?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticeValue: The alert threshold for the data latency of the incremental data verification task. Unit: seconds.
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticePeriod: The statistical period of an alert on the data latency of the incremental data verification task. Valid values:
     * - **1**: 1 minute
     * - **2**: 5 minutes
     * - **3**: 10 minutes
     * - **4**: 30 minutes
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticePeriod?: number | ros.IResolvable;
        /**
         * @Property dataCheckDbList: The objects whose data is to be verified. The value must be a JSON string.
         */
        readonly dataCheckDbList?: string | ros.IResolvable;
        /**
         * @Property checkMaximumHourEnable: Specifies whether to configure a timeout period for the full data verification task.Valid values:
     * - **0**: does not configure a timeout period for the full data verification task.
     * - **1**: configures a timeout period for the full data verification task.
     * **Note**: This parameter is required if the fullCheckModel parameter is set to 1.
         */
        readonly checkMaximumHourEnable?: number | ros.IResolvable;
        /**
         * @Property fullCheckRatio: The sampling ratio of the full data verification task. Valid values: integers from 10 to 100. Unit: percent.
     * **Note**: This parameter is required if the **fullCheckModel** parameter is set to 1.
         */
        readonly fullCheckRatio?: number | ros.IResolvable;
        /**
         * @Property checkMaximumHour: The timeout period of the full data verification task. Valid values: integers from 1 to 72. Countdown begins the moment the full data verification task is started. If the task is not complete within the specified timeout period, the task is forcibly stopped.
         */
        readonly checkMaximumHour?: number | ros.IResolvable;
        /**
         * @Property fullCheckFixData: Specifies whether to replace the inconsistent data. Valid values: **true** and **false**. Default value: false.
     * **Note**: For example, you set this parameter to true. If the destination database has data that is inconsistent with the data in the source database, the data values of the destination database are replaced with those of the source database.
         */
        readonly fullCheckFixData?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckModel: The mode of the full data verification task. Valid values:
     * - **1**: verifies the data by sampling ratio.
     * - **2**: verifies the data by row.
         */
        readonly fullCheckModel?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticeValue: The alert threshold for inconsistent data entries detected by the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalDataCheck: Specifies whether to perform an incremental data verification task. Valid values: **true** and **false**.
         */
        readonly incrementalDataCheck?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticeTimes: The number of statistical periods of an alert on inconsistent data entries detected by the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticeTimes?: number | ros.IResolvable;
        /**
         * @Property fullCheckMaxReadBps: The maximum number of bytes that are read per second. Valid values: integers from 0 to 9007199254740991.
         */
        readonly fullCheckMaxReadBps?: number | ros.IResolvable;
        /**
         * @Property fullCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the full data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to true. If the number of inconsistent data entries detected by the full data verification task is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly fullCheckValidFailNotice?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckErrorNotice: Specifies whether to trigger an alert if the full data verification task fails. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the full data verification task fails, an alert is triggered.
         */
        readonly fullCheckErrorNotice?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNoticePeriod: The statistical period of an alert on inconsistent data entries detected by the incremental data verification task. Valid values:
     * - **1**: 1 minute
     * - **2**: 5 minutes
     * - **3**: 10 minutes
     * - **4**: 30 minutes
     * **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
         */
        readonly incrementalCheckValidFailNoticePeriod?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckDelayNoticeTimes: The number of statistical periods of an alert on the data latency of the incremental data verification task.
     * **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
         */
        readonly incrementalCheckDelayNoticeTimes?: number | ros.IResolvable;
        /**
         * @Property fullCheckReferEndpoint: The benchmark for full data verification. Valid values:
     * - **all**: checks the data consistency between the source and destination databases based on the source and destination databases.
     * - **src**: checks the data consistency between the source and destination databases based on the source database. Objects that exist in the destination database but do not exist in the source database are not checked.
     * - **dest**: checks the data consistency between the source and destination databases based on the destination database. Objects that exist in the source database but do not exist in the destination database are not checked.
         */
        readonly fullCheckReferEndpoint?: string | ros.IResolvable;
        /**
         * @Property fullDataCheck: Specifies whether to perform a full data verification task. Valid values: **true** and **false**.
         */
        readonly fullDataCheck?: boolean | ros.IResolvable;
        /**
         * @Property incrementalCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the incremental data verification task. Valid values: **true** and **false**.
     * **Note**: For example, you set this parameter to **true**. If the cumulative number of inconsistent data entries detected by the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
         */
        readonly incrementalCheckValidFailNotice?: boolean | ros.IResolvable;
        /**
         * @Property fullCheckNoticeValue: The alert threshold for inconsistent data entries detected by the full data verification task.
     * **Note**: This parameter is required if the **fullCheckValidFailNotice** parameter is set to **true**.
         */
        readonly fullCheckNoticeValue?: number | ros.IResolvable;
        /**
         * @Property incrementalCheckErrorNotice: Specifies whether to trigger an alert if the incremental data verification task fails. Valid values: **true** and **false**.
     * Note: For example, you set this parameter to **true**. If the incremental data verification task fails, an alert is triggered.
         */
        readonly incrementalCheckErrorNotice?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataCheckConfigureProperty`
 *
 * @param properties - the TypeScript properties of a `DataCheckConfigureProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob2_DataCheckConfigurePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.fullCheckMaxReadRps && (typeof properties.fullCheckMaxReadRps) !== 'object') {
        errors.collect(ros.propertyValidator('fullCheckMaxReadRps', ros.validateRange)({
            data: properties.fullCheckMaxReadRps,
            min: 0,
            max: 9007199254740991,
          }));
    }
    errors.collect(ros.propertyValidator('fullCheckMaxReadRps', ros.validateNumber)(properties.fullCheckMaxReadRps));
    errors.collect(ros.propertyValidator('dataCheckNoticePhone', ros.validateString)(properties.dataCheckNoticePhone));
    errors.collect(ros.propertyValidator('incrementalCheckDelayNotice', ros.validateBoolean)(properties.incrementalCheckDelayNotice));
    errors.collect(ros.propertyValidator('incrementalCheckDelayNoticeValue', ros.validateNumber)(properties.incrementalCheckDelayNoticeValue));
    if(properties.incrementalCheckDelayNoticePeriod && (typeof properties.incrementalCheckDelayNoticePeriod) !== 'object') {
        errors.collect(ros.propertyValidator('incrementalCheckDelayNoticePeriod', ros.validateAllowedValues)({
          data: properties.incrementalCheckDelayNoticePeriod,
          allowedValues: [1,2,3,4],
        }));
    }
    errors.collect(ros.propertyValidator('incrementalCheckDelayNoticePeriod', ros.validateNumber)(properties.incrementalCheckDelayNoticePeriod));
    errors.collect(ros.propertyValidator('dataCheckDbList', ros.validateString)(properties.dataCheckDbList));
    if(properties.checkMaximumHourEnable && (typeof properties.checkMaximumHourEnable) !== 'object') {
        errors.collect(ros.propertyValidator('checkMaximumHourEnable', ros.validateAllowedValues)({
          data: properties.checkMaximumHourEnable,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('checkMaximumHourEnable', ros.validateNumber)(properties.checkMaximumHourEnable));
    if(properties.fullCheckRatio && (typeof properties.fullCheckRatio) !== 'object') {
        errors.collect(ros.propertyValidator('fullCheckRatio', ros.validateRange)({
            data: properties.fullCheckRatio,
            min: 10,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('fullCheckRatio', ros.validateNumber)(properties.fullCheckRatio));
    if(properties.checkMaximumHour && (typeof properties.checkMaximumHour) !== 'object') {
        errors.collect(ros.propertyValidator('checkMaximumHour', ros.validateRange)({
            data: properties.checkMaximumHour,
            min: 1,
            max: 72,
          }));
    }
    errors.collect(ros.propertyValidator('checkMaximumHour', ros.validateNumber)(properties.checkMaximumHour));
    errors.collect(ros.propertyValidator('fullCheckFixData', ros.validateBoolean)(properties.fullCheckFixData));
    if(properties.fullCheckModel && (typeof properties.fullCheckModel) !== 'object') {
        errors.collect(ros.propertyValidator('fullCheckModel', ros.validateAllowedValues)({
          data: properties.fullCheckModel,
          allowedValues: [1,2],
        }));
    }
    errors.collect(ros.propertyValidator('fullCheckModel', ros.validateNumber)(properties.fullCheckModel));
    errors.collect(ros.propertyValidator('incrementalCheckValidFailNoticeValue', ros.validateNumber)(properties.incrementalCheckValidFailNoticeValue));
    errors.collect(ros.propertyValidator('incrementalDataCheck', ros.validateBoolean)(properties.incrementalDataCheck));
    errors.collect(ros.propertyValidator('incrementalCheckValidFailNoticeTimes', ros.validateNumber)(properties.incrementalCheckValidFailNoticeTimes));
    if(properties.fullCheckMaxReadBps && (typeof properties.fullCheckMaxReadBps) !== 'object') {
        errors.collect(ros.propertyValidator('fullCheckMaxReadBps', ros.validateRange)({
            data: properties.fullCheckMaxReadBps,
            min: 0,
            max: 9007199254740991,
          }));
    }
    errors.collect(ros.propertyValidator('fullCheckMaxReadBps', ros.validateNumber)(properties.fullCheckMaxReadBps));
    errors.collect(ros.propertyValidator('fullCheckValidFailNotice', ros.validateBoolean)(properties.fullCheckValidFailNotice));
    errors.collect(ros.propertyValidator('fullCheckErrorNotice', ros.validateBoolean)(properties.fullCheckErrorNotice));
    if(properties.incrementalCheckValidFailNoticePeriod && (typeof properties.incrementalCheckValidFailNoticePeriod) !== 'object') {
        errors.collect(ros.propertyValidator('incrementalCheckValidFailNoticePeriod', ros.validateAllowedValues)({
          data: properties.incrementalCheckValidFailNoticePeriod,
          allowedValues: [1,2,3,4],
        }));
    }
    errors.collect(ros.propertyValidator('incrementalCheckValidFailNoticePeriod', ros.validateNumber)(properties.incrementalCheckValidFailNoticePeriod));
    errors.collect(ros.propertyValidator('incrementalCheckDelayNoticeTimes', ros.validateNumber)(properties.incrementalCheckDelayNoticeTimes));
    errors.collect(ros.propertyValidator('fullCheckReferEndpoint', ros.validateString)(properties.fullCheckReferEndpoint));
    errors.collect(ros.propertyValidator('fullDataCheck', ros.validateBoolean)(properties.fullDataCheck));
    errors.collect(ros.propertyValidator('incrementalCheckValidFailNotice', ros.validateBoolean)(properties.incrementalCheckValidFailNotice));
    errors.collect(ros.propertyValidator('fullCheckNoticeValue', ros.validateNumber)(properties.fullCheckNoticeValue));
    errors.collect(ros.propertyValidator('incrementalCheckErrorNotice', ros.validateBoolean)(properties.incrementalCheckErrorNotice));
    return errors.wrap('supplied properties not correct for "DataCheckConfigureProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob2.DataCheckConfigure` resource
 *
 * @param properties - the TypeScript properties of a `DataCheckConfigureProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob2.DataCheckConfigure` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJob2DataCheckConfigurePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob2_DataCheckConfigurePropertyValidator(properties).assertSuccess();
    return {
      'fullCheckMaxReadRps': ros.numberToRosTemplate(properties.fullCheckMaxReadRps),
      'dataCheckNoticePhone': ros.stringToRosTemplate(properties.dataCheckNoticePhone),
      'incrementalCheckDelayNotice': ros.booleanToRosTemplate(properties.incrementalCheckDelayNotice),
      'incrementalCheckDelayNoticeValue': ros.numberToRosTemplate(properties.incrementalCheckDelayNoticeValue),
      'incrementalCheckDelayNoticePeriod': ros.numberToRosTemplate(properties.incrementalCheckDelayNoticePeriod),
      'dataCheckDbList': ros.stringToRosTemplate(properties.dataCheckDbList),
      'checkMaximumHourEnable': ros.numberToRosTemplate(properties.checkMaximumHourEnable),
      'fullCheckRatio': ros.numberToRosTemplate(properties.fullCheckRatio),
      'checkMaximumHour': ros.numberToRosTemplate(properties.checkMaximumHour),
      'fullCheckFixData': ros.booleanToRosTemplate(properties.fullCheckFixData),
      'fullCheckModel': ros.numberToRosTemplate(properties.fullCheckModel),
      'incrementalCheckValidFailNoticeValue': ros.numberToRosTemplate(properties.incrementalCheckValidFailNoticeValue),
      'incrementalDataCheck': ros.booleanToRosTemplate(properties.incrementalDataCheck),
      'incrementalCheckValidFailNoticeTimes': ros.numberToRosTemplate(properties.incrementalCheckValidFailNoticeTimes),
      'fullCheckMaxReadBps': ros.numberToRosTemplate(properties.fullCheckMaxReadBps),
      'fullCheckValidFailNotice': ros.booleanToRosTemplate(properties.fullCheckValidFailNotice),
      'fullCheckErrorNotice': ros.booleanToRosTemplate(properties.fullCheckErrorNotice),
      'incrementalCheckValidFailNoticePeriod': ros.numberToRosTemplate(properties.incrementalCheckValidFailNoticePeriod),
      'incrementalCheckDelayNoticeTimes': ros.numberToRosTemplate(properties.incrementalCheckDelayNoticeTimes),
      'fullCheckReferEndpoint': ros.stringToRosTemplate(properties.fullCheckReferEndpoint),
      'fullDataCheck': ros.booleanToRosTemplate(properties.fullDataCheck),
      'incrementalCheckValidFailNotice': ros.booleanToRosTemplate(properties.incrementalCheckValidFailNotice),
      'fullCheckNoticeValue': ros.numberToRosTemplate(properties.fullCheckNoticeValue),
      'incrementalCheckErrorNotice': ros.booleanToRosTemplate(properties.incrementalCheckErrorNotice),
    };
}

export namespace RosSynchronizationJob2 {
    /**
     * @stability external
     */
    export interface DestinationEndpointProperty {
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the destination instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the destination database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the destination database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the destination instance. If the destination instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example, 
     * - If the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance. 
     * - If the destination instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the destination instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the destination instance. 
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the destination instance.
     * **Note**: This parameter is required only when the destination instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the destination instance.
     * **Note**: This parameter is required only when the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the destination instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the destination instance. Valid values:
     * Alibaba Cloud database instances
     * - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **REDIS**: ApsaraDB for Redis instance
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster
     * - **MONGODB**: ApsaraDB for MongoDB instance
     * - **GREENPLUM**: AnalyticDB for PostgreSQL instance
     * - **DATAHUB**: DataHub project
     * - **ELK**: Elasticsearch cluster
     * - **Tablestore**: Tablestore instance
     * - **ODPS**: MaxCompute project
     * Self-managed databases
     * - **OTHER**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an ECS instance
     * - **EXPRESS**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over CEN
     * - **DG**: self-managed database connected over Database Gateway
     * **Note**: If the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to OTHER or EXPRESS. Then, you can connect the PolarDB for PostgreSQL cluster (compatible with Oracle) to DTS as a self-managed database by using a public IP address or Express Connect.
     * If the destination instance is a Message Queue for Apache Kafka instance, you must set this parameter to ECS or EXPRESS. Then, you can connect the Message Queue for Apache Kafka instance to DTS as a self-managed database connected over ECS or Express Connect.
     * If the destination instance is a self-managed database, you must deploy the network environment for the database.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property engineName: The database engine of the destination instance. Valid values:
     * - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
     * - **POLARDBX10**: PolarDB-X 1.0 instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **ORACLE**: self-managed Oracle database
     * - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **ADS**: AnalyticDB for MySQL V2.0 cluster
     * - **ADB30**: AnalyticDB for MySQL V3.0 cluster- **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **GREENPLUM**: AnalyticDB for PostgreSQL instance
     * - **KAFKA**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
     * - **DATAHUB**: DataHub project- **DB2**: self-managed Db2 for LUW database
     * - **AS400**: self-managed Db2 for i database
     * - **ODPS**: MaxCompute project
     * - **Tablestore**: Tablestore instance
     * - **ELK**: Elasticsearch cluster
     * - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
     * **Note**: Default value: **MYSQL**.
     * If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in the Reserve parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property password: The password of the destination database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DestinationEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `DestinationEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob2_DestinationEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('oracleSid', ros.validateString)(properties.oracleSid));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('ownerId', ros.validateString)(properties.ownerId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('databaseName', ros.validateString)(properties.databaseName));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('engineName', ros.validateString)(properties.engineName));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "DestinationEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob2.DestinationEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `DestinationEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob2.DestinationEndpoint` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJob2DestinationEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob2_DestinationEndpointPropertyValidator(properties).assertSuccess();
    return {
      'Role': ros.stringToRosTemplate(properties.role),
      'OracleSID': ros.stringToRosTemplate(properties.oracleSid),
      'UserName': ros.stringToRosTemplate(properties.userName),
      'OwnerID': ros.stringToRosTemplate(properties.ownerId),
      'InstanceID': ros.stringToRosTemplate(properties.instanceId),
      'IP': ros.stringToRosTemplate(properties.ip),
      'Port': ros.stringToRosTemplate(properties.port),
      'DatabaseName': ros.stringToRosTemplate(properties.databaseName),
      'Region': ros.stringToRosTemplate(properties.region),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'EngineName': ros.stringToRosTemplate(properties.engineName),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosSynchronizationJob2 {
    /**
     * @stability external
     */
    export interface SourceEndpointProperty {
        /**
         * @Property oracleSid: The system ID (SID) of the Oracle database.
     * **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
         */
        readonly oracleSid?: string | ros.IResolvable;
        /**
         * @Property userName: The database account of the source database.
     * **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example, 
     * - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance. 
     * - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
     * - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
     * - If InstanceType is set to DG, you must specify the ID of the database gateway.
     * - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
     * **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
         */
        readonly instanceId?: string | ros.IResolvable;
        /**
         * @Property ip: The IP address of the source instance. 
     * **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property port: The port number of the source instance.
     * **Note**: This parameter is required only when the source instance is a self-managed database.
         */
        readonly port?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch used for the data shipping link.
         */
        readonly vSwitchId?: string | ros.IResolvable;
        /**
         * @Property databaseName: The name of the database which contains the objects to be migrated in the source instance.
     * **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
         */
        readonly databaseName?: string | ros.IResolvable;
        /**
         * @Property engineName: The database engine of the source instance. Valid values:
     * - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
     * - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
     * - **POLARDBX10**: PolarDB-X 1.0 instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **ORACLE**: self-managed Oracle database
     * - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
     * - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
     * - **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
     * - **DB2**: self-managed Db2 for LUW database
     * - **AS400**: self-managed Db2 for i database
     * - **DMSPOLARDB**: DMS logical database
     * - **HBASE**: self-managed HBase database
     * - **TERADATA**: Teradata database
     * - **TiDB**: TiDB database
     * - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
     * **Note**: Default value: **MYSQL**.
     * If EngineName is set to **MONGODB**, you must also specify the architecture type of the **MongoDB** database in the **Reserve** parameter.
         */
        readonly engineName?: string | ros.IResolvable;
        /**
         * @Property role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
     * **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
         */
        readonly role?: string | ros.IResolvable;
        /**
         * @Property ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
     * **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
         */
        readonly ownerId?: string | ros.IResolvable;
        /**
         * @Property region: The ID of the region in which the source instance resides.
     * **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property instanceType: The type of the source instance. Valid values:
     * Alibaba Cloud database instances:
     * - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
     * - **PolarDB**: PolarDB for MySQL cluster
     * - **REDIS**: ApsaraDB for Redis instance
     * - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
     * - **POLARDBX20**: PolarDB-X 2.0 instance
     * - **MONGODB**: ApsaraDB for MongoDB instance
     * - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
     * Self-managed databases:
     * - **OTHER**: self-managed database with a public IP address
     * - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
     * - **EXPRESS**: self-managed database connected over Express Connect
     * - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
     * - **DG**: self-managed database connected over Database Gateway
     * **Note**: If the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to **OTHER** or **EXPRESS**. Then, you can connect the PolarDB for PostgreSQL cluster to DTS as a self-managed database by using a public IP address or Express Connect. If the source instance is a self-managed database, you must deploy the network environment for the database.
         */
        readonly instanceType: string | ros.IResolvable;
        /**
         * @Property password: The password of the source database account.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourceEndpointProperty`
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the result of the validation.
 */
function RosSynchronizationJob2_SourceEndpointPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oracleSid', ros.validateString)(properties.oracleSid));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('databaseName', ros.validateString)(properties.databaseName));
    errors.collect(ros.propertyValidator('engineName', ros.validateString)(properties.engineName));
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('ownerId', ros.validateString)(properties.ownerId));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "SourceEndpointProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob2.SourceEndpoint` resource
 *
 * @param properties - the TypeScript properties of a `SourceEndpointProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DTS::SynchronizationJob2.SourceEndpoint` resource.
 */
// @ts-ignore TS6133
function rosSynchronizationJob2SourceEndpointPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSynchronizationJob2_SourceEndpointPropertyValidator(properties).assertSuccess();
    return {
      'OracleSID': ros.stringToRosTemplate(properties.oracleSid),
      'UserName': ros.stringToRosTemplate(properties.userName),
      'InstanceID': ros.stringToRosTemplate(properties.instanceId),
      'IP': ros.stringToRosTemplate(properties.ip),
      'Port': ros.stringToRosTemplate(properties.port),
      'VSwitchID': ros.stringToRosTemplate(properties.vSwitchId),
      'DatabaseName': ros.stringToRosTemplate(properties.databaseName),
      'EngineName': ros.stringToRosTemplate(properties.engineName),
      'Role': ros.stringToRosTemplate(properties.role),
      'OwnerID': ros.stringToRosTemplate(properties.ownerId),
      'Region': ros.stringToRosTemplate(properties.region),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}
