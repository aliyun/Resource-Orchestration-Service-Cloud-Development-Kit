package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::SiteDeliveryTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.700Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.SiteDeliveryTask")
public class SiteDeliveryTask extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.ISiteDeliveryTask {

    protected SiteDeliveryTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SiteDeliveryTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SiteDeliveryTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SiteDeliveryTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BusinessType: Real-time log type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessType() {
        return software.amazon.jsii.Kernel.get(this, "attrBusinessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DataCenter: Data Center.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDataCenter() {
        return software.amazon.jsii.Kernel.get(this, "attrDataCenter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeliveryType: Delivery Type:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryType() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiscardRate: If the discard rate is not filled, the default value is 0.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiscardRate() {
        return software.amazon.jsii.Kernel.get(this, "attrDiscardRate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FieldName: The list of delivery fields to be modified, separated by commas.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFieldName() {
        return software.amazon.jsii.Kernel.get(this, "attrFieldName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FilterRules: The filtering rules.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilterRules() {
        return software.amazon.jsii.Kernel.get(this, "attrFilterRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SinkConfig: The delivery configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSinkConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrSinkConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteId: The site ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteName: The website name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskName: The task name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskName() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.SiteDeliveryTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.SiteDeliveryTask> {
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
        private final com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.SiteDeliveryTaskProps.Builder();
        }

        /**
         * Property businessType: Real-time log type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>dcdn_log_access_l1 (default)</code>: access log.</li>
         * <li><code>dcdn_log_er</code>: Edge Routine logs.</li>
         * <li><code>dcdn_log_waf</code>: firewall logs.</li>
         * <li><code>dcdn_log_ipa</code>: TCP/UDP proxy logs.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param businessType Property businessType: Real-time log type. This parameter is required.
         */
        public Builder businessType(final java.lang.String businessType) {
            this.props.businessType(businessType);
            return this;
        }
        /**
         * Property businessType: Real-time log type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><code>dcdn_log_access_l1 (default)</code>: access log.</li>
         * <li><code>dcdn_log_er</code>: Edge Routine logs.</li>
         * <li><code>dcdn_log_waf</code>: firewall logs.</li>
         * <li><code>dcdn_log_ipa</code>: TCP/UDP proxy logs.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param businessType Property businessType: Real-time log type. This parameter is required.
         */
        public Builder businessType(final com.aliyun.ros.cdk.core.IResolvable businessType) {
            this.props.businessType(businessType);
            return this;
        }

        /**
         * Property dataCenter: Data Center.
         * <p>
         * Values:
         * <p>
         * <ul>
         * <li><code>cn</code>: Mainland China.</li>
         * <li><code>sg</code>: Global (excluding Mainland China).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dataCenter Property dataCenter: Data Center. This parameter is required.
         */
        public Builder dataCenter(final java.lang.String dataCenter) {
            this.props.dataCenter(dataCenter);
            return this;
        }
        /**
         * Property dataCenter: Data Center.
         * <p>
         * Values:
         * <p>
         * <ul>
         * <li><code>cn</code>: Mainland China.</li>
         * <li><code>sg</code>: Global (excluding Mainland China).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param dataCenter Property dataCenter: Data Center. This parameter is required.
         */
        public Builder dataCenter(final com.aliyun.ros.cdk.core.IResolvable dataCenter) {
            this.props.dataCenter(dataCenter);
            return this;
        }

        /**
         * Property deliveryType: Delivery Type: - <code>sls</code>: Alibaba Cloud Simple Log Service (SLS).
         * <p>
         * <ul>
         * <li><code>http</code>: Http service.</li>
         * <li><code>aws3</code>: Amazon s3 service.</li>
         * <li><code>oss</code>: Alibaba Cloud Object Storage Service.</li>
         * <li><code>kafka</code>: Kafka service.</li>
         * <li><code>aws3cmpt</code>: Amazon s3 Compatible Service.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param deliveryType Property deliveryType: Delivery Type: - <code>sls</code>: Alibaba Cloud Simple Log Service (SLS). This parameter is required.
         */
        public Builder deliveryType(final java.lang.String deliveryType) {
            this.props.deliveryType(deliveryType);
            return this;
        }
        /**
         * Property deliveryType: Delivery Type: - <code>sls</code>: Alibaba Cloud Simple Log Service (SLS).
         * <p>
         * <ul>
         * <li><code>http</code>: Http service.</li>
         * <li><code>aws3</code>: Amazon s3 service.</li>
         * <li><code>oss</code>: Alibaba Cloud Object Storage Service.</li>
         * <li><code>kafka</code>: Kafka service.</li>
         * <li><code>aws3cmpt</code>: Amazon s3 Compatible Service.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param deliveryType Property deliveryType: Delivery Type: - <code>sls</code>: Alibaba Cloud Simple Log Service (SLS). This parameter is required.
         */
        public Builder deliveryType(final com.aliyun.ros.cdk.core.IResolvable deliveryType) {
            this.props.deliveryType(deliveryType);
            return this;
        }

        /**
         * Property fieldName: The list of delivery fields to be modified, separated by commas.
         * <p>
         * @return {@code this}
         * @param fieldName Property fieldName: The list of delivery fields to be modified, separated by commas. This parameter is required.
         */
        public Builder fieldName(final java.lang.String fieldName) {
            this.props.fieldName(fieldName);
            return this;
        }
        /**
         * Property fieldName: The list of delivery fields to be modified, separated by commas.
         * <p>
         * @return {@code this}
         * @param fieldName Property fieldName: The list of delivery fields to be modified, separated by commas. This parameter is required.
         */
        public Builder fieldName(final com.aliyun.ros.cdk.core.IResolvable fieldName) {
            this.props.fieldName(fieldName);
            return this;
        }

        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property taskName: The name of the delivery task.
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The name of the delivery task. This parameter is required.
         */
        public Builder taskName(final java.lang.String taskName) {
            this.props.taskName(taskName);
            return this;
        }
        /**
         * Property taskName: The name of the delivery task.
         * <p>
         * @return {@code this}
         * @param taskName Property taskName: The name of the delivery task. This parameter is required.
         */
        public Builder taskName(final com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.props.taskName(taskName);
            return this;
        }

        /**
         * Property discardRate: If the discard rate is not filled, the default value is 0.
         * <p>
         * @return {@code this}
         * @param discardRate Property discardRate: If the discard rate is not filled, the default value is 0. This parameter is required.
         */
        public Builder discardRate(final java.lang.Number discardRate) {
            this.props.discardRate(discardRate);
            return this;
        }
        /**
         * Property discardRate: If the discard rate is not filled, the default value is 0.
         * <p>
         * @return {@code this}
         * @param discardRate Property discardRate: If the discard rate is not filled, the default value is 0. This parameter is required.
         */
        public Builder discardRate(final com.aliyun.ros.cdk.core.IResolvable discardRate) {
            this.props.discardRate(discardRate);
            return this;
        }

        /**
         * Property httpDelivery: HTTP delivery configuration parameters.
         * <p>
         * @return {@code this}
         * @param httpDelivery Property httpDelivery: HTTP delivery configuration parameters. This parameter is required.
         */
        public Builder httpDelivery(final com.aliyun.ros.cdk.core.IResolvable httpDelivery) {
            this.props.httpDelivery(httpDelivery);
            return this;
        }
        /**
         * Property httpDelivery: HTTP delivery configuration parameters.
         * <p>
         * @return {@code this}
         * @param httpDelivery Property httpDelivery: HTTP delivery configuration parameters. This parameter is required.
         */
        public Builder httpDelivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.HttpDeliveryProperty httpDelivery) {
            this.props.httpDelivery(httpDelivery);
            return this;
        }

        /**
         * Property kafkaDelivery: Kafka delivery configuration parameters.
         * <p>
         * @return {@code this}
         * @param kafkaDelivery Property kafkaDelivery: Kafka delivery configuration parameters. This parameter is required.
         */
        public Builder kafkaDelivery(final com.aliyun.ros.cdk.core.IResolvable kafkaDelivery) {
            this.props.kafkaDelivery(kafkaDelivery);
            return this;
        }
        /**
         * Property kafkaDelivery: Kafka delivery configuration parameters.
         * <p>
         * @return {@code this}
         * @param kafkaDelivery Property kafkaDelivery: Kafka delivery configuration parameters. This parameter is required.
         */
        public Builder kafkaDelivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.KafkaDeliveryProperty kafkaDelivery) {
            this.props.kafkaDelivery(kafkaDelivery);
            return this;
        }

        /**
         * Property ossDelivery: OSS delivery configuration.
         * <p>
         * @return {@code this}
         * @param ossDelivery Property ossDelivery: OSS delivery configuration. This parameter is required.
         */
        public Builder ossDelivery(final com.aliyun.ros.cdk.core.IResolvable ossDelivery) {
            this.props.ossDelivery(ossDelivery);
            return this;
        }
        /**
         * Property ossDelivery: OSS delivery configuration.
         * <p>
         * @return {@code this}
         * @param ossDelivery Property ossDelivery: OSS delivery configuration. This parameter is required.
         */
        public Builder ossDelivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.OssDeliveryProperty ossDelivery) {
            this.props.ossDelivery(ossDelivery);
            return this;
        }

        /**
         * Property s3Delivery: S3/S3 compatible delivery configuration parameters.
         * <p>
         * @return {@code this}
         * @param s3Delivery Property s3Delivery: S3/S3 compatible delivery configuration parameters. This parameter is required.
         */
        public Builder s3Delivery(final com.aliyun.ros.cdk.core.IResolvable s3Delivery) {
            this.props.s3Delivery(s3Delivery);
            return this;
        }
        /**
         * Property s3Delivery: S3/S3 compatible delivery configuration parameters.
         * <p>
         * @return {@code this}
         * @param s3Delivery Property s3Delivery: S3/S3 compatible delivery configuration parameters. This parameter is required.
         */
        public Builder s3Delivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.S3DeliveryProperty s3Delivery) {
            this.props.s3Delivery(s3Delivery);
            return this;
        }

        /**
         * Property slsDelivery: SLS delivery configuration.
         * <p>
         * @return {@code this}
         * @param slsDelivery Property slsDelivery: SLS delivery configuration. This parameter is required.
         */
        public Builder slsDelivery(final com.aliyun.ros.cdk.core.IResolvable slsDelivery) {
            this.props.slsDelivery(slsDelivery);
            return this;
        }
        /**
         * Property slsDelivery: SLS delivery configuration.
         * <p>
         * @return {@code this}
         * @param slsDelivery Property slsDelivery: SLS delivery configuration. This parameter is required.
         */
        public Builder slsDelivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.SlsDeliveryProperty slsDelivery) {
            this.props.slsDelivery(slsDelivery);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.SiteDeliveryTask}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.SiteDeliveryTask build() {
            return new com.aliyun.ros.cdk.esa.SiteDeliveryTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
