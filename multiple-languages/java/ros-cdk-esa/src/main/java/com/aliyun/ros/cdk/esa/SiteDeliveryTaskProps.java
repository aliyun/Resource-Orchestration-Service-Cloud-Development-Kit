package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>SiteDeliveryTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.608Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.SiteDeliveryTaskProps")
@software.amazon.jsii.Jsii.Proxy(SiteDeliveryTaskProps.Jsii$Proxy.class)
public interface SiteDeliveryTaskProps extends software.amazon.jsii.JsiiSerializable {

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBusinessType();

    /**
     * Property dataCenter: Data Center.
     * <p>
     * Values:
     * <p>
     * <ul>
     * <li><code>cn</code>: Mainland China.</li>
     * <li><code>sg</code>: Global (excluding Mainland China).</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataCenter();

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryType();

    /**
     * Property fieldName: The list of delivery fields to be modified, separated by commas.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFieldName();

    /**
     * Property siteId: The site ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property taskName: The name of the delivery task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskName();

    /**
     * Property discardRate: If the discard rate is not filled, the default value is 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiscardRate() {
        return null;
    }

    /**
     * Property httpDelivery: HTTP delivery configuration parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpDelivery() {
        return null;
    }

    /**
     * Property kafkaDelivery: Kafka delivery configuration parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKafkaDelivery() {
        return null;
    }

    /**
     * Property ossDelivery: OSS delivery configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssDelivery() {
        return null;
    }

    /**
     * Property s3Delivery: S3/S3 compatible delivery configuration parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getS3Delivery() {
        return null;
    }

    /**
     * Property slsDelivery: SLS delivery configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsDelivery() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SiteDeliveryTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SiteDeliveryTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SiteDeliveryTaskProps> {
        java.lang.Object businessType;
        java.lang.Object dataCenter;
        java.lang.Object deliveryType;
        java.lang.Object fieldName;
        java.lang.Object siteId;
        java.lang.Object taskName;
        java.lang.Object discardRate;
        java.lang.Object httpDelivery;
        java.lang.Object kafkaDelivery;
        java.lang.Object ossDelivery;
        java.lang.Object s3Delivery;
        java.lang.Object slsDelivery;

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getBusinessType}
         * @param businessType Property businessType: Real-time log type. This parameter is required.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li><code>dcdn_log_access_l1 (default)</code>: access log.</li>
         *                     <li><code>dcdn_log_er</code>: Edge Routine logs.</li>
         *                     <li><code>dcdn_log_waf</code>: firewall logs.</li>
         *                     <li><code>dcdn_log_ipa</code>: TCP/UDP proxy logs.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder businessType(java.lang.String businessType) {
            this.businessType = businessType;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getBusinessType}
         * @param businessType Property businessType: Real-time log type. This parameter is required.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li><code>dcdn_log_access_l1 (default)</code>: access log.</li>
         *                     <li><code>dcdn_log_er</code>: Edge Routine logs.</li>
         *                     <li><code>dcdn_log_waf</code>: firewall logs.</li>
         *                     <li><code>dcdn_log_ipa</code>: TCP/UDP proxy logs.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder businessType(com.aliyun.ros.cdk.core.IResolvable businessType) {
            this.businessType = businessType;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getDataCenter}
         * @param dataCenter Property dataCenter: Data Center. This parameter is required.
         *                   Values:
         *                   <p>
         *                   <ul>
         *                   <li><code>cn</code>: Mainland China.</li>
         *                   <li><code>sg</code>: Global (excluding Mainland China).</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder dataCenter(java.lang.String dataCenter) {
            this.dataCenter = dataCenter;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getDataCenter}
         * @param dataCenter Property dataCenter: Data Center. This parameter is required.
         *                   Values:
         *                   <p>
         *                   <ul>
         *                   <li><code>cn</code>: Mainland China.</li>
         *                   <li><code>sg</code>: Global (excluding Mainland China).</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder dataCenter(com.aliyun.ros.cdk.core.IResolvable dataCenter) {
            this.dataCenter = dataCenter;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getDeliveryType}
         * @param deliveryType Property deliveryType: Delivery Type: - <code>sls</code>: Alibaba Cloud Simple Log Service (SLS). This parameter is required.
         *                     <ul>
         *                     <li><code>http</code>: Http service.</li>
         *                     <li><code>aws3</code>: Amazon s3 service.</li>
         *                     <li><code>oss</code>: Alibaba Cloud Object Storage Service.</li>
         *                     <li><code>kafka</code>: Kafka service.</li>
         *                     <li><code>aws3cmpt</code>: Amazon s3 Compatible Service.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder deliveryType(java.lang.String deliveryType) {
            this.deliveryType = deliveryType;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getDeliveryType}
         * @param deliveryType Property deliveryType: Delivery Type: - <code>sls</code>: Alibaba Cloud Simple Log Service (SLS). This parameter is required.
         *                     <ul>
         *                     <li><code>http</code>: Http service.</li>
         *                     <li><code>aws3</code>: Amazon s3 service.</li>
         *                     <li><code>oss</code>: Alibaba Cloud Object Storage Service.</li>
         *                     <li><code>kafka</code>: Kafka service.</li>
         *                     <li><code>aws3cmpt</code>: Amazon s3 Compatible Service.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder deliveryType(com.aliyun.ros.cdk.core.IResolvable deliveryType) {
            this.deliveryType = deliveryType;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getFieldName}
         * @param fieldName Property fieldName: The list of delivery fields to be modified, separated by commas. This parameter is required.
         * @return {@code this}
         */
        public Builder fieldName(java.lang.String fieldName) {
            this.fieldName = fieldName;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getFieldName}
         * @param fieldName Property fieldName: The list of delivery fields to be modified, separated by commas. This parameter is required.
         * @return {@code this}
         */
        public Builder fieldName(com.aliyun.ros.cdk.core.IResolvable fieldName) {
            this.fieldName = fieldName;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getSiteId}
         * @param siteId Property siteId: The site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getSiteId}
         * @param siteId Property siteId: The site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getTaskName}
         * @param taskName Property taskName: The name of the delivery task. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(java.lang.String taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getTaskName}
         * @param taskName Property taskName: The name of the delivery task. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getDiscardRate}
         * @param discardRate Property discardRate: If the discard rate is not filled, the default value is 0.
         * @return {@code this}
         */
        public Builder discardRate(java.lang.Number discardRate) {
            this.discardRate = discardRate;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getDiscardRate}
         * @param discardRate Property discardRate: If the discard rate is not filled, the default value is 0.
         * @return {@code this}
         */
        public Builder discardRate(com.aliyun.ros.cdk.core.IResolvable discardRate) {
            this.discardRate = discardRate;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getHttpDelivery}
         * @param httpDelivery Property httpDelivery: HTTP delivery configuration parameters.
         * @return {@code this}
         */
        public Builder httpDelivery(com.aliyun.ros.cdk.core.IResolvable httpDelivery) {
            this.httpDelivery = httpDelivery;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getHttpDelivery}
         * @param httpDelivery Property httpDelivery: HTTP delivery configuration parameters.
         * @return {@code this}
         */
        public Builder httpDelivery(com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.HttpDeliveryProperty httpDelivery) {
            this.httpDelivery = httpDelivery;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getKafkaDelivery}
         * @param kafkaDelivery Property kafkaDelivery: Kafka delivery configuration parameters.
         * @return {@code this}
         */
        public Builder kafkaDelivery(com.aliyun.ros.cdk.core.IResolvable kafkaDelivery) {
            this.kafkaDelivery = kafkaDelivery;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getKafkaDelivery}
         * @param kafkaDelivery Property kafkaDelivery: Kafka delivery configuration parameters.
         * @return {@code this}
         */
        public Builder kafkaDelivery(com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.KafkaDeliveryProperty kafkaDelivery) {
            this.kafkaDelivery = kafkaDelivery;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getOssDelivery}
         * @param ossDelivery Property ossDelivery: OSS delivery configuration.
         * @return {@code this}
         */
        public Builder ossDelivery(com.aliyun.ros.cdk.core.IResolvable ossDelivery) {
            this.ossDelivery = ossDelivery;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getOssDelivery}
         * @param ossDelivery Property ossDelivery: OSS delivery configuration.
         * @return {@code this}
         */
        public Builder ossDelivery(com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.OssDeliveryProperty ossDelivery) {
            this.ossDelivery = ossDelivery;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getS3Delivery}
         * @param s3Delivery Property s3Delivery: S3/S3 compatible delivery configuration parameters.
         * @return {@code this}
         */
        public Builder s3Delivery(com.aliyun.ros.cdk.core.IResolvable s3Delivery) {
            this.s3Delivery = s3Delivery;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getS3Delivery}
         * @param s3Delivery Property s3Delivery: S3/S3 compatible delivery configuration parameters.
         * @return {@code this}
         */
        public Builder s3Delivery(com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.S3DeliveryProperty s3Delivery) {
            this.s3Delivery = s3Delivery;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getSlsDelivery}
         * @param slsDelivery Property slsDelivery: SLS delivery configuration.
         * @return {@code this}
         */
        public Builder slsDelivery(com.aliyun.ros.cdk.core.IResolvable slsDelivery) {
            this.slsDelivery = slsDelivery;
            return this;
        }

        /**
         * Sets the value of {@link SiteDeliveryTaskProps#getSlsDelivery}
         * @param slsDelivery Property slsDelivery: SLS delivery configuration.
         * @return {@code this}
         */
        public Builder slsDelivery(com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.SlsDeliveryProperty slsDelivery) {
            this.slsDelivery = slsDelivery;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SiteDeliveryTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SiteDeliveryTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SiteDeliveryTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SiteDeliveryTaskProps {
        private final java.lang.Object businessType;
        private final java.lang.Object dataCenter;
        private final java.lang.Object deliveryType;
        private final java.lang.Object fieldName;
        private final java.lang.Object siteId;
        private final java.lang.Object taskName;
        private final java.lang.Object discardRate;
        private final java.lang.Object httpDelivery;
        private final java.lang.Object kafkaDelivery;
        private final java.lang.Object ossDelivery;
        private final java.lang.Object s3Delivery;
        private final java.lang.Object slsDelivery;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.businessType = software.amazon.jsii.Kernel.get(this, "businessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataCenter = software.amazon.jsii.Kernel.get(this, "dataCenter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryType = software.amazon.jsii.Kernel.get(this, "deliveryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fieldName = software.amazon.jsii.Kernel.get(this, "fieldName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskName = software.amazon.jsii.Kernel.get(this, "taskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.discardRate = software.amazon.jsii.Kernel.get(this, "discardRate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpDelivery = software.amazon.jsii.Kernel.get(this, "httpDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kafkaDelivery = software.amazon.jsii.Kernel.get(this, "kafkaDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossDelivery = software.amazon.jsii.Kernel.get(this, "ossDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.s3Delivery = software.amazon.jsii.Kernel.get(this, "s3Delivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsDelivery = software.amazon.jsii.Kernel.get(this, "slsDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.businessType = java.util.Objects.requireNonNull(builder.businessType, "businessType is required");
            this.dataCenter = java.util.Objects.requireNonNull(builder.dataCenter, "dataCenter is required");
            this.deliveryType = java.util.Objects.requireNonNull(builder.deliveryType, "deliveryType is required");
            this.fieldName = java.util.Objects.requireNonNull(builder.fieldName, "fieldName is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.taskName = java.util.Objects.requireNonNull(builder.taskName, "taskName is required");
            this.discardRate = builder.discardRate;
            this.httpDelivery = builder.httpDelivery;
            this.kafkaDelivery = builder.kafkaDelivery;
            this.ossDelivery = builder.ossDelivery;
            this.s3Delivery = builder.s3Delivery;
            this.slsDelivery = builder.slsDelivery;
        }

        @Override
        public final java.lang.Object getBusinessType() {
            return this.businessType;
        }

        @Override
        public final java.lang.Object getDataCenter() {
            return this.dataCenter;
        }

        @Override
        public final java.lang.Object getDeliveryType() {
            return this.deliveryType;
        }

        @Override
        public final java.lang.Object getFieldName() {
            return this.fieldName;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getTaskName() {
            return this.taskName;
        }

        @Override
        public final java.lang.Object getDiscardRate() {
            return this.discardRate;
        }

        @Override
        public final java.lang.Object getHttpDelivery() {
            return this.httpDelivery;
        }

        @Override
        public final java.lang.Object getKafkaDelivery() {
            return this.kafkaDelivery;
        }

        @Override
        public final java.lang.Object getOssDelivery() {
            return this.ossDelivery;
        }

        @Override
        public final java.lang.Object getS3Delivery() {
            return this.s3Delivery;
        }

        @Override
        public final java.lang.Object getSlsDelivery() {
            return this.slsDelivery;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("businessType", om.valueToTree(this.getBusinessType()));
            data.set("dataCenter", om.valueToTree(this.getDataCenter()));
            data.set("deliveryType", om.valueToTree(this.getDeliveryType()));
            data.set("fieldName", om.valueToTree(this.getFieldName()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            data.set("taskName", om.valueToTree(this.getTaskName()));
            if (this.getDiscardRate() != null) {
                data.set("discardRate", om.valueToTree(this.getDiscardRate()));
            }
            if (this.getHttpDelivery() != null) {
                data.set("httpDelivery", om.valueToTree(this.getHttpDelivery()));
            }
            if (this.getKafkaDelivery() != null) {
                data.set("kafkaDelivery", om.valueToTree(this.getKafkaDelivery()));
            }
            if (this.getOssDelivery() != null) {
                data.set("ossDelivery", om.valueToTree(this.getOssDelivery()));
            }
            if (this.getS3Delivery() != null) {
                data.set("s3Delivery", om.valueToTree(this.getS3Delivery()));
            }
            if (this.getSlsDelivery() != null) {
                data.set("slsDelivery", om.valueToTree(this.getSlsDelivery()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.SiteDeliveryTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SiteDeliveryTaskProps.Jsii$Proxy that = (SiteDeliveryTaskProps.Jsii$Proxy) o;

            if (!businessType.equals(that.businessType)) return false;
            if (!dataCenter.equals(that.dataCenter)) return false;
            if (!deliveryType.equals(that.deliveryType)) return false;
            if (!fieldName.equals(that.fieldName)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (!taskName.equals(that.taskName)) return false;
            if (this.discardRate != null ? !this.discardRate.equals(that.discardRate) : that.discardRate != null) return false;
            if (this.httpDelivery != null ? !this.httpDelivery.equals(that.httpDelivery) : that.httpDelivery != null) return false;
            if (this.kafkaDelivery != null ? !this.kafkaDelivery.equals(that.kafkaDelivery) : that.kafkaDelivery != null) return false;
            if (this.ossDelivery != null ? !this.ossDelivery.equals(that.ossDelivery) : that.ossDelivery != null) return false;
            if (this.s3Delivery != null ? !this.s3Delivery.equals(that.s3Delivery) : that.s3Delivery != null) return false;
            return this.slsDelivery != null ? this.slsDelivery.equals(that.slsDelivery) : that.slsDelivery == null;
        }

        @Override
        public final int hashCode() {
            int result = this.businessType.hashCode();
            result = 31 * result + (this.dataCenter.hashCode());
            result = 31 * result + (this.deliveryType.hashCode());
            result = 31 * result + (this.fieldName.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.taskName.hashCode());
            result = 31 * result + (this.discardRate != null ? this.discardRate.hashCode() : 0);
            result = 31 * result + (this.httpDelivery != null ? this.httpDelivery.hashCode() : 0);
            result = 31 * result + (this.kafkaDelivery != null ? this.kafkaDelivery.hashCode() : 0);
            result = 31 * result + (this.ossDelivery != null ? this.ossDelivery.hashCode() : 0);
            result = 31 * result + (this.s3Delivery != null ? this.s3Delivery.hashCode() : 0);
            result = 31 * result + (this.slsDelivery != null ? this.slsDelivery.hashCode() : 0);
            return result;
        }
    }
}
