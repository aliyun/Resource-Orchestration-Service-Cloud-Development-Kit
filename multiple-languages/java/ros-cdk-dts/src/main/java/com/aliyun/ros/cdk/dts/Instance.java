package com.aliyun.ros.cdk.dts;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DTS::Instance</code>, which is a new resource type that is used to create a Data Transmission Service (DTS) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:38.159Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The ID of the DTS instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute JobId: The ID of the task.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.Instance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dts.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.InstanceProps.Builder();
        }

        /**
         * Property instanceClass: The instance class.
         * <p>
         * <ul>
         * <li>DTS supports the following instance classes for a data migration instance: <strong>xxlarge</strong>, <strong>xlarge</strong>, <strong>large</strong>, <strong>medium</strong>, and <strong>small</strong>.</li>
         * <li>DTS supports the following instance classes for a data synchronization instance: <strong>large</strong>, <strong>medium</strong>, <strong>small</strong>, and <strong>micro</strong>.
         * <strong>Note</strong>: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: The instance class. This parameter is required.
         */
        public Builder instanceClass(final java.lang.String instanceClass) {
            this.props.instanceClass(instanceClass);
            return this;
        }
        /**
         * Property instanceClass: The instance class.
         * <p>
         * <ul>
         * <li>DTS supports the following instance classes for a data migration instance: <strong>xxlarge</strong>, <strong>xlarge</strong>, <strong>large</strong>, <strong>medium</strong>, and <strong>small</strong>.</li>
         * <li>DTS supports the following instance classes for a data synchronization instance: <strong>large</strong>, <strong>medium</strong>, <strong>small</strong>, and <strong>micro</strong>.
         * <strong>Note</strong>: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: The instance class. This parameter is required.
         */
        public Builder instanceClass(final com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.props.instanceClass(instanceClass);
            return this;
        }

        /**
         * Property payType: The billing method.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>PrePaid</strong>: subscription</li>
         * <li><strong>PostPaid</strong>: pay-as-you-go</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>PrePaid</strong>: subscription</li>
         * <li><strong>PostPaid</strong>: pay-as-you-go</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property type: The type of the DTS instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>*<em>MIGRATION</em>: data migration instance</li>
         * <li><strong>SYNC</strong>: data synchronization instance</li>
         * <li><strong>SUBSCRIBE</strong>: change tracking instance</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the DTS instance. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the DTS instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>*<em>MIGRATION</em>: data migration instance</li>
         * <li><strong>SYNC</strong>: data synchronization instance</li>
         * <li><strong>SUBSCRIBE</strong>: change tracking instance</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the DTS instance. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property autoPay: Specifies whether to automatically renew the DTS instance when it expires.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>false</strong>: does not automatically renew the DTS instance when it expires. This is the default value.</li>
         * <li><strong>true</strong>: automatically renews the DTS instance when it expires.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to automatically renew the DTS instance when it expires. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Specifies whether to automatically renew the DTS instance when it expires.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>false</strong>: does not automatically renew the DTS instance when it expires. This is the default value.</li>
         * <li><strong>true</strong>: automatically renews the DTS instance when it expires.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to automatically renew the DTS instance when it expires. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>false</strong>: does not automatically start the task after the DTS instance is purchased. This is the default value.</li>
         * <li><strong>true</strong>: automatically starts the task after the DTS instance is purchased.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoStart Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. This parameter is required.
         */
        public Builder autoStart(final java.lang.Boolean autoStart) {
            this.props.autoStart(autoStart);
            return this;
        }
        /**
         * Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>false</strong>: does not automatically start the task after the DTS instance is purchased. This is the default value.</li>
         * <li><strong>true</strong>: automatically starts the task after the DTS instance is purchased.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param autoStart Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. This parameter is required.
         */
        public Builder autoStart(final com.aliyun.ros.cdk.core.IResolvable autoStart) {
            this.props.autoStart(autoStart);
            return this;
        }

        /**
         * Property computeUnit: The specifications of the extract, transform, and load (ETL) instance.
         * <p>
         * The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
         * <p>
         * @return {@code this}
         * @param computeUnit Property computeUnit: The specifications of the extract, transform, and load (ETL) instance. This parameter is required.
         */
        public Builder computeUnit(final java.lang.Number computeUnit) {
            this.props.computeUnit(computeUnit);
            return this;
        }
        /**
         * Property computeUnit: The specifications of the extract, transform, and load (ETL) instance.
         * <p>
         * The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
         * <p>
         * @return {@code this}
         * @param computeUnit Property computeUnit: The specifications of the extract, transform, and load (ETL) instance. This parameter is required.
         */
        public Builder computeUnit(final com.aliyun.ros.cdk.core.IResolvable computeUnit) {
            this.props.computeUnit(computeUnit);
            return this;
        }

        /**
         * Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance.
         * <p>
         * Default value: <strong>1</strong>.
         * <strong>Note</strong>: You must specify this parameter only if the <strong>SourceEndpointEngineName</strong> parameter is set to <strong>drds</strong>.
         * <p>
         * @return {@code this}
         * @param databaseCount Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. This parameter is required.
         */
        public Builder databaseCount(final java.lang.Number databaseCount) {
            this.props.databaseCount(databaseCount);
            return this;
        }
        /**
         * Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance.
         * <p>
         * Default value: <strong>1</strong>.
         * <strong>Note</strong>: You must specify this parameter only if the <strong>SourceEndpointEngineName</strong> parameter is set to <strong>drds</strong>.
         * <p>
         * @return {@code this}
         * @param databaseCount Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. This parameter is required.
         */
        public Builder databaseCount(final com.aliyun.ros.cdk.core.IResolvable databaseCount) {
            this.props.databaseCount(databaseCount);
            return this;
        }

        /**
         * Property destinationEndpointEngineName: The database engine of the destination instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>MySQL</strong>: ApsaraDB RDS for MySQL instance or self-managed MySQL database</li>
         * <li><strong>PolarDB</strong>: PolarDB for MySQL cluster</li>
         * <li><strong>polardb_o</strong>: PolarDB for Oracle cluster</li>
         * <li><strong>polardb_pg</strong>: PolarDB for PostgreSQL cluster</li>
         * <li><strong>Redis</strong>: ApsaraDB for Redis instance or self-managed Redis database</li>
         * <li><strong>DRDS</strong>: PolarDB-X 1.0 or PolarDB-X 2.0 instance</li>
         * <li><strong>PostgreSQL</strong>: self-managed PostgreSQL database</li>
         * <li><strong>odps</strong>: MaxCompute project</li>
         * <li><strong>oracle</strong>: self-managed Oracle database</li>
         * <li><strong>mongodb</strong>: ApsaraDB for MongoDB instance or self-managed MongoDB database</li>
         * <li><strong>tidb</strong>: TiDB database</li>
         * <li><strong>ADS</strong>: AnalyticDB for MySQL V2.0 cluster</li>
         * <li><strong>ADB30</strong>: AnalyticDB for MySQL V3.0 cluster</li>
         * <li><strong>Greenplum</strong>: AnalyticDB for PostgreSQL instance</li>
         * <li><strong>MSSQL</strong>: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database</li>
         * <li><strong>kafka</strong>: Message Queue for Apache Kafka instance or self-managed Kafka cluster</li>
         * <li><strong>DataHub</strong>: DataHub project</li>
         * <li><strong>DB2</strong>: self-managed Db2 for LUW database</li>
         * <li><strong>as400</strong>: AS/400</li>
         * <li><strong>Tablestore</strong>: Tablestore instance
         * <strong>Note</strong>: The default value is <strong>MySQL</strong>. You must specify one of this parameter and the <strong>JobId</strong> parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destinationEndpointEngineName Property destinationEndpointEngineName: The database engine of the destination instance. This parameter is required.
         */
        public Builder destinationEndpointEngineName(final java.lang.String destinationEndpointEngineName) {
            this.props.destinationEndpointEngineName(destinationEndpointEngineName);
            return this;
        }
        /**
         * Property destinationEndpointEngineName: The database engine of the destination instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>MySQL</strong>: ApsaraDB RDS for MySQL instance or self-managed MySQL database</li>
         * <li><strong>PolarDB</strong>: PolarDB for MySQL cluster</li>
         * <li><strong>polardb_o</strong>: PolarDB for Oracle cluster</li>
         * <li><strong>polardb_pg</strong>: PolarDB for PostgreSQL cluster</li>
         * <li><strong>Redis</strong>: ApsaraDB for Redis instance or self-managed Redis database</li>
         * <li><strong>DRDS</strong>: PolarDB-X 1.0 or PolarDB-X 2.0 instance</li>
         * <li><strong>PostgreSQL</strong>: self-managed PostgreSQL database</li>
         * <li><strong>odps</strong>: MaxCompute project</li>
         * <li><strong>oracle</strong>: self-managed Oracle database</li>
         * <li><strong>mongodb</strong>: ApsaraDB for MongoDB instance or self-managed MongoDB database</li>
         * <li><strong>tidb</strong>: TiDB database</li>
         * <li><strong>ADS</strong>: AnalyticDB for MySQL V2.0 cluster</li>
         * <li><strong>ADB30</strong>: AnalyticDB for MySQL V3.0 cluster</li>
         * <li><strong>Greenplum</strong>: AnalyticDB for PostgreSQL instance</li>
         * <li><strong>MSSQL</strong>: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database</li>
         * <li><strong>kafka</strong>: Message Queue for Apache Kafka instance or self-managed Kafka cluster</li>
         * <li><strong>DataHub</strong>: DataHub project</li>
         * <li><strong>DB2</strong>: self-managed Db2 for LUW database</li>
         * <li><strong>as400</strong>: AS/400</li>
         * <li><strong>Tablestore</strong>: Tablestore instance
         * <strong>Note</strong>: The default value is <strong>MySQL</strong>. You must specify one of this parameter and the <strong>JobId</strong> parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destinationEndpointEngineName Property destinationEndpointEngineName: The database engine of the destination instance. This parameter is required.
         */
        public Builder destinationEndpointEngineName(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointEngineName) {
            this.props.destinationEndpointEngineName(destinationEndpointEngineName);
            return this;
        }

        /**
         * Property destinationRegion: The ID of the region in which the destination instance resides.
         * <p>
         * <strong>Note</strong>: You must specify one of this parameter and the <strong>JobId</strong> parameter.
         * <p>
         * @return {@code this}
         * @param destinationRegion Property destinationRegion: The ID of the region in which the destination instance resides. This parameter is required.
         */
        public Builder destinationRegion(final java.lang.String destinationRegion) {
            this.props.destinationRegion(destinationRegion);
            return this;
        }
        /**
         * Property destinationRegion: The ID of the region in which the destination instance resides.
         * <p>
         * <strong>Note</strong>: You must specify one of this parameter and the <strong>JobId</strong> parameter.
         * <p>
         * @return {@code this}
         * @param destinationRegion Property destinationRegion: The ID of the region in which the destination instance resides. This parameter is required.
         */
        public Builder destinationRegion(final com.aliyun.ros.cdk.core.IResolvable destinationRegion) {
            this.props.destinationRegion(destinationRegion);
            return this;
        }

        /**
         * Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster.
         * <p>
         * Valid values: <strong>1</strong> to <strong>100</strong>.
         * <strong>Note</strong>: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
         * <p>
         * @return {@code this}
         * @param du Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. This parameter is required.
         */
        public Builder du(final java.lang.Number du) {
            this.props.du(du);
            return this;
        }
        /**
         * Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster.
         * <p>
         * Valid values: <strong>1</strong> to <strong>100</strong>.
         * <strong>Note</strong>: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
         * <p>
         * @return {@code this}
         * @param du Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. This parameter is required.
         */
        public Builder du(final com.aliyun.ros.cdk.core.IResolvable du) {
            this.props.du(du);
            return this;
        }

        /**
         * Property feeType: The billing type for a change tracking instance.
         * <p>
         * Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.
         * <p>
         * <ul>
         * <li><strong>ONLY_CONFIGURATION_FEE</strong>: charges only configuration fees.</li>
         * <li><strong>CONFIGURATION_FEE_AND_DATA_FEE</strong>: charges configuration fees and data traffic fees.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param feeType Property feeType: The billing type for a change tracking instance. This parameter is required.
         */
        public Builder feeType(final java.lang.String feeType) {
            this.props.feeType(feeType);
            return this;
        }
        /**
         * Property feeType: The billing type for a change tracking instance.
         * <p>
         * Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.
         * <p>
         * <ul>
         * <li><strong>ONLY_CONFIGURATION_FEE</strong>: charges only configuration fees.</li>
         * <li><strong>CONFIGURATION_FEE_AND_DATA_FEE</strong>: charges configuration fees and data traffic fees.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param feeType Property feeType: The billing type for a change tracking instance. This parameter is required.
         */
        public Builder feeType(final com.aliyun.ros.cdk.core.IResolvable feeType) {
            this.props.feeType(feeType);
            return this;
        }

        /**
         * Property jobId: The ID of the task.
         * <p>
         * <strong>Note</strong>: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
         * <p>
         * @return {@code this}
         * @param jobId Property jobId: The ID of the task. This parameter is required.
         */
        public Builder jobId(final java.lang.String jobId) {
            this.props.jobId(jobId);
            return this;
        }
        /**
         * Property jobId: The ID of the task.
         * <p>
         * <strong>Note</strong>: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
         * <p>
         * @return {@code this}
         * @param jobId Property jobId: The ID of the task. This parameter is required.
         */
        public Builder jobId(final com.aliyun.ros.cdk.core.IResolvable jobId) {
            this.props.jobId(jobId);
            return this;
        }

        /**
         * Property period: The unit of the subscription duration.
         * <p>
         * Valid values: <strong>Year</strong> and <strong>Month</strong>.
         * <strong>Note</strong>: You must specify this parameter only if the <strong>PayType</strong> parameter is set to <strong>PrePaid</strong>.
         * <p>
         * @return {@code this}
         * @param period Property period: The unit of the subscription duration. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The unit of the subscription duration.
         * <p>
         * Valid values: <strong>Year</strong> and <strong>Month</strong>.
         * <strong>Note</strong>: You must specify this parameter only if the <strong>PayType</strong> parameter is set to <strong>PrePaid</strong>.
         * <p>
         * @return {@code this}
         * @param period Property period: The unit of the subscription duration. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property sourceEndpointEngineName: The database engine of the source instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>MySQL</strong>: ApsaraDB RDS for MySQL instance or self-managed MySQL database</li>
         * <li><strong>PolarDB</strong>: PolarDB for MySQL cluster</li>
         * <li><strong>polardb_o</strong>: PolarDB for Oracle cluster</li>
         * <li><strong>polardb_pg</strong>: PolarDB for PostgreSQL cluster</li>
         * <li><strong>Redis</strong>: ApsaraDB for Redis instance or self-managed Redis database</li>
         * <li><strong>DRDS</strong>: PolarDB-X 1.0 or PolarDB-X 2.0 instance</li>
         * <li><strong>PostgreSQL</strong>: self-managed PostgreSQL database</li>
         * <li><strong>odps</strong>: MaxCompute project</li>
         * <li><strong>oracle</strong>: self-managed Oracle database</li>
         * <li><strong>mongodb</strong>: ApsaraDB for MongoDB instance or self-managed MongoDB database</li>
         * <li><strong>tidb</strong>: TiDB database</li>
         * <li><strong>ADS</strong>: AnalyticDB for MySQL V2.0 cluster</li>
         * <li><strong>ADB30</strong>: AnalyticDB for MySQL V3.0 cluster</li>
         * <li><strong>Greenplum</strong>: AnalyticDB for PostgreSQL instance</li>
         * <li><strong>MSSQL</strong>: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database</li>
         * <li><strong>kafka</strong>: Message Queue for Apache Kafka instance or self-managed Kafka cluster</li>
         * <li><strong>DataHub</strong>: DataHub project</li>
         * <li><strong>DB2</strong>: self-managed Db2 for LUW database</li>
         * <li><strong>as400</strong>: AS/400</li>
         * <li><strong>Tablestore</strong>: Tablestore instance
         * <strong>Note</strong>: The default value is <strong>MySQL</strong>. You must specify one of this parameter and the <strong>JobId</strong> parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceEndpointEngineName Property sourceEndpointEngineName: The database engine of the source instance. This parameter is required.
         */
        public Builder sourceEndpointEngineName(final java.lang.String sourceEndpointEngineName) {
            this.props.sourceEndpointEngineName(sourceEndpointEngineName);
            return this;
        }
        /**
         * Property sourceEndpointEngineName: The database engine of the source instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>MySQL</strong>: ApsaraDB RDS for MySQL instance or self-managed MySQL database</li>
         * <li><strong>PolarDB</strong>: PolarDB for MySQL cluster</li>
         * <li><strong>polardb_o</strong>: PolarDB for Oracle cluster</li>
         * <li><strong>polardb_pg</strong>: PolarDB for PostgreSQL cluster</li>
         * <li><strong>Redis</strong>: ApsaraDB for Redis instance or self-managed Redis database</li>
         * <li><strong>DRDS</strong>: PolarDB-X 1.0 or PolarDB-X 2.0 instance</li>
         * <li><strong>PostgreSQL</strong>: self-managed PostgreSQL database</li>
         * <li><strong>odps</strong>: MaxCompute project</li>
         * <li><strong>oracle</strong>: self-managed Oracle database</li>
         * <li><strong>mongodb</strong>: ApsaraDB for MongoDB instance or self-managed MongoDB database</li>
         * <li><strong>tidb</strong>: TiDB database</li>
         * <li><strong>ADS</strong>: AnalyticDB for MySQL V2.0 cluster</li>
         * <li><strong>ADB30</strong>: AnalyticDB for MySQL V3.0 cluster</li>
         * <li><strong>Greenplum</strong>: AnalyticDB for PostgreSQL instance</li>
         * <li><strong>MSSQL</strong>: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database</li>
         * <li><strong>kafka</strong>: Message Queue for Apache Kafka instance or self-managed Kafka cluster</li>
         * <li><strong>DataHub</strong>: DataHub project</li>
         * <li><strong>DB2</strong>: self-managed Db2 for LUW database</li>
         * <li><strong>as400</strong>: AS/400</li>
         * <li><strong>Tablestore</strong>: Tablestore instance
         * <strong>Note</strong>: The default value is <strong>MySQL</strong>. You must specify one of this parameter and the <strong>JobId</strong> parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceEndpointEngineName Property sourceEndpointEngineName: The database engine of the source instance. This parameter is required.
         */
        public Builder sourceEndpointEngineName(final com.aliyun.ros.cdk.core.IResolvable sourceEndpointEngineName) {
            this.props.sourceEndpointEngineName(sourceEndpointEngineName);
            return this;
        }

        /**
         * Property sourceRegion: The ID of the region in which the source instance resides.
         * <p>
         * <strong>Note</strong>: You must specify one of this parameter and the <strong>JobId</strong> parameter.
         * <p>
         * @return {@code this}
         * @param sourceRegion Property sourceRegion: The ID of the region in which the source instance resides. This parameter is required.
         */
        public Builder sourceRegion(final java.lang.String sourceRegion) {
            this.props.sourceRegion(sourceRegion);
            return this;
        }
        /**
         * Property sourceRegion: The ID of the region in which the source instance resides.
         * <p>
         * <strong>Note</strong>: You must specify one of this parameter and the <strong>JobId</strong> parameter.
         * <p>
         * @return {@code this}
         * @param sourceRegion Property sourceRegion: The ID of the region in which the source instance resides. This parameter is required.
         */
        public Builder sourceRegion(final com.aliyun.ros.cdk.core.IResolvable sourceRegion) {
            this.props.sourceRegion(sourceRegion);
            return this;
        }

        /**
         * Property syncArchitecture: The synchronization topology.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>oneway</strong>: one-way synchronization. This is the default value.</li>
         * <li><strong>bidirectional</strong>: two-way synchronization.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param syncArchitecture Property syncArchitecture: The synchronization topology. This parameter is required.
         */
        public Builder syncArchitecture(final java.lang.String syncArchitecture) {
            this.props.syncArchitecture(syncArchitecture);
            return this;
        }
        /**
         * Property syncArchitecture: The synchronization topology.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>oneway</strong>: one-way synchronization. This is the default value.</li>
         * <li><strong>bidirectional</strong>: two-way synchronization.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param syncArchitecture Property syncArchitecture: The synchronization topology. This parameter is required.
         */
        public Builder syncArchitecture(final com.aliyun.ros.cdk.core.IResolvable syncArchitecture) {
            this.props.syncArchitecture(syncArchitecture);
            return this;
        }

        /**
         * Property usedTime: The subscription duration.
         * <p>
         * <ul>
         * <li>Valid values if the <strong>Period</strong> parameter is set to <strong>Month</strong>: 1, 2, 3, 4, 5, 6, 7, 8, and 9.</li>
         * <li>Valid values if the <strong>Period</strong> parameter is set to <strong>Year</strong>: 1, 2, 3, and 5.
         * <strong>Note</strong>: You must specify this parameter only if the <strong>PayType</strong> parameter is set to <strong>PrePaid</strong>. You can set the <strong>Period</strong> parameter to specify the unit of the subscription duration.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: The subscription duration. This parameter is required.
         */
        public Builder usedTime(final java.lang.Number usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }
        /**
         * Property usedTime: The subscription duration.
         * <p>
         * <ul>
         * <li>Valid values if the <strong>Period</strong> parameter is set to <strong>Month</strong>: 1, 2, 3, 4, 5, 6, 7, 8, and 9.</li>
         * <li>Valid values if the <strong>Period</strong> parameter is set to <strong>Year</strong>: 1, 2, 3, and 5.
         * <strong>Note</strong>: You must specify this parameter only if the <strong>PayType</strong> parameter is set to <strong>PrePaid</strong>. You can set the <strong>Period</strong> parameter to specify the unit of the subscription duration.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: The subscription duration. This parameter is required.
         */
        public Builder usedTime(final com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dts.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.Instance build() {
            return new com.aliyun.ros.cdk.dts.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
