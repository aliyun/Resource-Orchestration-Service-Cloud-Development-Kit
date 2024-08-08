package com.aliyun.ros.cdk.elasticsearch;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ElasticSearch::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:10.641Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.Instance")
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Domain: Instance connection domain (only VPC network access supported).
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceChargeType: Instance charge type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The ID of the Elasticsearch instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute KibanaDomain: Kibana console domain (Internet access supported).
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKibanaDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrKibanaDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute KibanaPort: Kibana console port.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKibanaPort() {
        return software.amazon.jsii.Kernel.get(this, "attrKibanaPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Port:  Instance connection port.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicDomain: Instance public connection domain.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Status: The Elasticsearch instance status.
     * <p>
     * Includes active, activating, inactive. Some operations are denied when status is not active.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Version: Elasticsearch version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: The ID of VSwitch.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.elasticsearch.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.elasticsearch.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.elasticsearch.Instance> {
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
        private final com.aliyun.ros.cdk.elasticsearch.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.elasticsearch.InstanceProps.Builder();
        }

        /**
         * Property dataNode: The Elasticsearch cluster's data node setting.
         * <p>
         * @return {@code this}
         * @param dataNode Property dataNode: The Elasticsearch cluster's data node setting. This parameter is required.
         */
        public Builder dataNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.DataNodeProperty dataNode) {
            this.props.dataNode(dataNode);
            return this;
        }
        /**
         * Property dataNode: The Elasticsearch cluster's data node setting.
         * <p>
         * @return {@code this}
         * @param dataNode Property dataNode: The Elasticsearch cluster's data node setting. This parameter is required.
         */
        public Builder dataNode(final com.aliyun.ros.cdk.core.IResolvable dataNode) {
            this.props.dataNode(dataNode);
            return this;
        }

        /**
         * Property password: The password of the instance.
         * <p>
         * The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!&#64;#$%&amp;*()_+-=).
         * <p>
         * @return {@code this}
         * @param password Property password: The password of the instance. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The password of the instance.
         * <p>
         * The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!&#64;#$%&amp;*()_+-=).
         * <p>
         * @return {@code this}
         * @param password Property password: The password of the instance. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property version: Elasticsearch version.
         * <p>
         * Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
         * <p>
         * @return {@code this}
         * @param version Property version: Elasticsearch version. This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
            return this;
        }
        /**
         * Property version: Elasticsearch version.
         * <p>
         * Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
         * <p>
         * @return {@code this}
         * @param version Property version: Elasticsearch version. This parameter is required.
         */
        public Builder version(final com.aliyun.ros.cdk.core.IResolvable version) {
            this.props.version(version);
            return this;
        }

        /**
         * Property vSwitchId: The ID of VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property description: The description of instance.
         * <p>
         * It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of instance. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of instance.
         * <p>
         * It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of instance. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property enableKibanaPrivate: Enables or disables intranet access to Kibana.
         * <p>
         * @return {@code this}
         * @param enableKibanaPrivate Property enableKibanaPrivate: Enables or disables intranet access to Kibana. This parameter is required.
         */
        public Builder enableKibanaPrivate(final java.lang.Boolean enableKibanaPrivate) {
            this.props.enableKibanaPrivate(enableKibanaPrivate);
            return this;
        }
        /**
         * Property enableKibanaPrivate: Enables or disables intranet access to Kibana.
         * <p>
         * @return {@code this}
         * @param enableKibanaPrivate Property enableKibanaPrivate: Enables or disables intranet access to Kibana. This parameter is required.
         */
        public Builder enableKibanaPrivate(final com.aliyun.ros.cdk.core.IResolvable enableKibanaPrivate) {
            this.props.enableKibanaPrivate(enableKibanaPrivate);
            return this;
        }

        /**
         * Property enableKibanaPublic: Enables or disables Internet access to Kibana.
         * <p>
         * @return {@code this}
         * @param enableKibanaPublic Property enableKibanaPublic: Enables or disables Internet access to Kibana. This parameter is required.
         */
        public Builder enableKibanaPublic(final java.lang.Boolean enableKibanaPublic) {
            this.props.enableKibanaPublic(enableKibanaPublic);
            return this;
        }
        /**
         * Property enableKibanaPublic: Enables or disables Internet access to Kibana.
         * <p>
         * @return {@code this}
         * @param enableKibanaPublic Property enableKibanaPublic: Enables or disables Internet access to Kibana. This parameter is required.
         */
        public Builder enableKibanaPublic(final com.aliyun.ros.cdk.core.IResolvable enableKibanaPublic) {
            this.props.enableKibanaPublic(enableKibanaPublic);
            return this;
        }

        /**
         * Property enablePublic: Whether enable public access.
         * <p>
         * If properties is true, will allocate public address.Default: false.
         * <p>
         * @return {@code this}
         * @param enablePublic Property enablePublic: Whether enable public access. This parameter is required.
         */
        public Builder enablePublic(final java.lang.Boolean enablePublic) {
            this.props.enablePublic(enablePublic);
            return this;
        }
        /**
         * Property enablePublic: Whether enable public access.
         * <p>
         * If properties is true, will allocate public address.Default: false.
         * <p>
         * @return {@code this}
         * @param enablePublic Property enablePublic: Whether enable public access. This parameter is required.
         */
        public Builder enablePublic(final com.aliyun.ros.cdk.core.IResolvable enablePublic) {
            this.props.enablePublic(enablePublic);
            return this;
        }

        /**
         * Property instanceCategory: Version Type: - x-pack: Create a commercial instance or a kernel-enhanced instance without Indexing Service and OpenStore enabled.
         * <p>
         * <ul>
         * <li>IS: Creates a kernel-enhanced instance with Indexing Service or OpenStore enabled</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceCategory Property instanceCategory: Version Type: - x-pack: Create a commercial instance or a kernel-enhanced instance without Indexing Service and OpenStore enabled. This parameter is required.
         */
        public Builder instanceCategory(final java.lang.String instanceCategory) {
            this.props.instanceCategory(instanceCategory);
            return this;
        }
        /**
         * Property instanceCategory: Version Type: - x-pack: Create a commercial instance or a kernel-enhanced instance without Indexing Service and OpenStore enabled.
         * <p>
         * <ul>
         * <li>IS: Creates a kernel-enhanced instance with Indexing Service or OpenStore enabled</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceCategory Property instanceCategory: Version Type: - x-pack: Create a commercial instance or a kernel-enhanced instance without Indexing Service and OpenStore enabled. This parameter is required.
         */
        public Builder instanceCategory(final com.aliyun.ros.cdk.core.IResolvable instanceCategory) {
            this.props.instanceCategory(instanceCategory);
            return this;
        }

        /**
         * Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property kibanaNode: The dedicated kibana node setting.
         * <p>
         * @return {@code this}
         * @param kibanaNode Property kibanaNode: The dedicated kibana node setting. This parameter is required.
         */
        public Builder kibanaNode(final com.aliyun.ros.cdk.core.IResolvable kibanaNode) {
            this.props.kibanaNode(kibanaNode);
            return this;
        }
        /**
         * Property kibanaNode: The dedicated kibana node setting.
         * <p>
         * @return {@code this}
         * @param kibanaNode Property kibanaNode: The dedicated kibana node setting. This parameter is required.
         */
        public Builder kibanaNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.KibanaNodeProperty kibanaNode) {
            this.props.kibanaNode(kibanaNode);
            return this;
        }

        /**
         * Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
         * <p>
         * @return {@code this}
         * @param kibanaWhitelist Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network. This parameter is required.
         */
        public Builder kibanaWhitelist(final java.util.List<? extends java.lang.Object> kibanaWhitelist) {
            this.props.kibanaWhitelist(kibanaWhitelist);
            return this;
        }
        /**
         * Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
         * <p>
         * @return {@code this}
         * @param kibanaWhitelist Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network. This parameter is required.
         */
        public Builder kibanaWhitelist(final com.aliyun.ros.cdk.core.IResolvable kibanaWhitelist) {
            this.props.kibanaWhitelist(kibanaWhitelist);
            return this;
        }

        /**
         * Property masterNode: The dedicated master node setting.
         * <p>
         * If specified, dedicated master node will be created.
         * <p>
         * @return {@code this}
         * @param masterNode Property masterNode: The dedicated master node setting. This parameter is required.
         */
        public Builder masterNode(final com.aliyun.ros.cdk.core.IResolvable masterNode) {
            this.props.masterNode(masterNode);
            return this;
        }
        /**
         * Property masterNode: The dedicated master node setting.
         * <p>
         * If specified, dedicated master node will be created.
         * <p>
         * @return {@code this}
         * @param masterNode Property masterNode: The dedicated master node setting. This parameter is required.
         */
        public Builder masterNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.MasterNodeProperty masterNode) {
            this.props.masterNode(masterNode);
            return this;
        }

        /**
         * Property period: The duration that you will buy Elasticsearch instance.
         * <p>
         * It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
         * <p>
         * @return {@code this}
         * @param period Property period: The duration that you will buy Elasticsearch instance. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The duration that you will buy Elasticsearch instance.
         * <p>
         * It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
         * <p>
         * @return {@code this}
         * @param period Property period: The duration that you will buy Elasticsearch instance. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: Unit of prepaid time period, it could be Month/Year.
         * <p>
         * Default value is Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Month/Year. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: Unit of prepaid time period, it could be Month/Year.
         * <p>
         * Default value is Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Month/Year. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property privateWhitelist: Set the instance's IP whitelist in VPC network.
         * <p>
         * @return {@code this}
         * @param privateWhitelist Property privateWhitelist: Set the instance's IP whitelist in VPC network. This parameter is required.
         */
        public Builder privateWhitelist(final java.util.List<? extends java.lang.Object> privateWhitelist) {
            this.props.privateWhitelist(privateWhitelist);
            return this;
        }
        /**
         * Property privateWhitelist: Set the instance's IP whitelist in VPC network.
         * <p>
         * @return {@code this}
         * @param privateWhitelist Property privateWhitelist: Set the instance's IP whitelist in VPC network. This parameter is required.
         */
        public Builder privateWhitelist(final com.aliyun.ros.cdk.core.IResolvable privateWhitelist) {
            this.props.privateWhitelist(privateWhitelist);
            return this;
        }

        /**
         * Property publicWhitelist: Set the instance's IP whitelist in Internet.
         * <p>
         * The AllocatePublicAddress should be true.
         * <p>
         * @return {@code this}
         * @param publicWhitelist Property publicWhitelist: Set the instance's IP whitelist in Internet. This parameter is required.
         */
        public Builder publicWhitelist(final java.util.List<? extends java.lang.Object> publicWhitelist) {
            this.props.publicWhitelist(publicWhitelist);
            return this;
        }
        /**
         * Property publicWhitelist: Set the instance's IP whitelist in Internet.
         * <p>
         * The AllocatePublicAddress should be true.
         * <p>
         * @return {@code this}
         * @param publicWhitelist Property publicWhitelist: Set the instance's IP whitelist in Internet. This parameter is required.
         */
        public Builder publicWhitelist(final com.aliyun.ros.cdk.core.IResolvable publicWhitelist) {
            this.props.publicWhitelist(publicWhitelist);
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
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property ymlConfig: In the YML Configuration section of the Cluster  Configuration page of your Alibaba Cloud Elasticsearch cluster,  you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
         * <p>
         * @return {@code this}
         * @param ymlConfig Property ymlConfig: In the YML Configuration section of the Cluster  Configuration page of your Alibaba Cloud Elasticsearch cluster,  you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature. This parameter is required.
         */
        public Builder ymlConfig(final com.aliyun.ros.cdk.core.IResolvable ymlConfig) {
            this.props.ymlConfig(ymlConfig);
            return this;
        }
        /**
         * Property ymlConfig: In the YML Configuration section of the Cluster  Configuration page of your Alibaba Cloud Elasticsearch cluster,  you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
         * <p>
         * @return {@code this}
         * @param ymlConfig Property ymlConfig: In the YML Configuration section of the Cluster  Configuration page of your Alibaba Cloud Elasticsearch cluster,  you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature. This parameter is required.
         */
        public Builder ymlConfig(final com.aliyun.ros.cdk.elasticsearch.RosInstance.YMLConfigProperty ymlConfig) {
            this.props.ymlConfig(ymlConfig);
            return this;
        }

        /**
         * Property zoneCount: undefined.
         * <p>
         * @return {@code this}
         * @param zoneCount Property zoneCount: undefined. This parameter is required.
         */
        public Builder zoneCount(final java.lang.Number zoneCount) {
            this.props.zoneCount(zoneCount);
            return this;
        }
        /**
         * Property zoneCount: undefined.
         * <p>
         * @return {@code this}
         * @param zoneCount Property zoneCount: undefined. This parameter is required.
         */
        public Builder zoneCount(final com.aliyun.ros.cdk.core.IResolvable zoneCount) {
            this.props.zoneCount(zoneCount);
            return this;
        }

        /**
         * Property zoneId: The zone id of elasticsearch.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone id of elasticsearch. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone id of elasticsearch.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone id of elasticsearch. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.elasticsearch.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.elasticsearch.Instance build() {
            return new com.aliyun.ros.cdk.elasticsearch.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
