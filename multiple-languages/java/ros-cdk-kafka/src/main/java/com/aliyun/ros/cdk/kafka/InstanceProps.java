package com.aliyun.ros.cdk.kafka;

/**
 * Properties for defining a `ALIYUN::KAFKA::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:26.286Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.
     * <p>
     * Valid values:
     * 4: Instance of the public type
     * 5: Instance of the VPC type
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeployType();

    /**
     * Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskSize();

    /**
     * Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.
     * <p>
     * Valid values:
     * 0: Ultra disk
     * 1: SSD
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskType();

    /**
     * Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.
     * <p>
     * The default value of this parameter varies with different peak traffic values.
     * Additional fees are charged if the default values are exceeded.
     * Different specifications have different default values, and extra fees are charged.
     * For more information, see Billing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopicQuota();

    /**
     * Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance.
     * <p>
     * Default is false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployOption() {
        return null;
    }

    /**
     * Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
     * <p>
     * This parameter must be specified when the DeployType parameter is set to 4.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipMax() {
        return null;
    }

    /**
     * Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
     * <p>
     * For more information about the value range, see Billing.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoMax() {
        return null;
    }

    /**
     * Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.
     * <p>
     * When filling in at the same time, subject to IoMaxSpec.
     * It is recommended that you only fill in the flow specification
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoMaxSpec() {
        return null;
    }

    /**
     * Property openConnector: Whether open kafka connector or not.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOpenConnector() {
        return null;
    }

    /**
     * Property payType: Pay by hour or month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property specType: The edition of the Message Queue for Apache Kafka instance.
     * <p>
     * Valid values:
     * professional: Professional Edition
     * normal: Normal version
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpecType() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object deployType;
        java.lang.Object diskSize;
        java.lang.Object diskType;
        java.lang.Object topicQuota;
        java.lang.Object deletionForce;
        java.lang.Object deployOption;
        java.lang.Object eipMax;
        java.lang.Object ioMax;
        java.lang.Object ioMaxSpec;
        java.lang.Object openConnector;
        java.lang.Object payType;
        java.lang.Object specType;
        java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link InstanceProps#getDeployType}
         * @param deployType Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. This parameter is required.
         *                   Valid values:
         *                   4: Instance of the public type
         *                   5: Instance of the VPC type
         * @return {@code this}
         */
        public Builder deployType(java.lang.Number deployType) {
            this.deployType = deployType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDeployType}
         * @param deployType Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. This parameter is required.
         *                   Valid values:
         *                   4: Instance of the public type
         *                   5: Instance of the VPC type
         * @return {@code this}
         */
        public Builder deployType(com.aliyun.ros.cdk.core.IResolvable deployType) {
            this.deployType = deployType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDiskSize}
         * @param diskSize Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         * @return {@code this}
         */
        public Builder diskSize(java.lang.Number diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDiskSize}
         * @param diskSize Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         * @return {@code this}
         */
        public Builder diskSize(com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDiskType}
         * @param diskType Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         *                 Valid values:
         *                 0: Ultra disk
         *                 1: SSD
         * @return {@code this}
         */
        public Builder diskType(java.lang.String diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDiskType}
         * @param diskType Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         *                 Valid values:
         *                 0: Ultra disk
         *                 1: SSD
         * @return {@code this}
         */
        public Builder diskType(com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTopicQuota}
         * @param topicQuota Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         *                   The default value of this parameter varies with different peak traffic values.
         *                   Additional fees are charged if the default values are exceeded.
         *                   Different specifications have different default values, and extra fees are charged.
         *                   For more information, see Billing.
         * @return {@code this}
         */
        public Builder topicQuota(java.lang.Number topicQuota) {
            this.topicQuota = topicQuota;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTopicQuota}
         * @param topicQuota Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. This parameter is required.
         *                   The default value of this parameter varies with different peak traffic values.
         *                   Additional fees are charged if the default values are exceeded.
         *                   Different specifications have different default values, and extra fees are charged.
         *                   For more information, see Billing.
         * @return {@code this}
         */
        public Builder topicQuota(com.aliyun.ros.cdk.core.IResolvable topicQuota) {
            this.topicQuota = topicQuota;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance.
         *                      Default is false
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance.
         *                      Default is false
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDeployOption}
         * @param deployOption Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.
         * @return {@code this}
         */
        public Builder deployOption(com.aliyun.ros.cdk.core.IResolvable deployOption) {
            this.deployOption = deployOption;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDeployOption}
         * @param deployOption Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.
         * @return {@code this}
         */
        public Builder deployOption(com.aliyun.ros.cdk.kafka.RosInstance.DeployOptionProperty deployOption) {
            this.deployOption = deployOption;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEipMax}
         * @param eipMax Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
         *               This parameter must be specified when the DeployType parameter is set to 4.
         * @return {@code this}
         */
        public Builder eipMax(java.lang.Number eipMax) {
            this.eipMax = eipMax;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEipMax}
         * @param eipMax Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
         *               This parameter must be specified when the DeployType parameter is set to 4.
         * @return {@code this}
         */
        public Builder eipMax(com.aliyun.ros.cdk.core.IResolvable eipMax) {
            this.eipMax = eipMax;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIoMax}
         * @param ioMax Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
         *              For more information about the value range, see Billing.
         * @return {@code this}
         */
        public Builder ioMax(java.lang.Number ioMax) {
            this.ioMax = ioMax;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIoMax}
         * @param ioMax Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
         *              For more information about the value range, see Billing.
         * @return {@code this}
         */
        public Builder ioMax(com.aliyun.ros.cdk.core.IResolvable ioMax) {
            this.ioMax = ioMax;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIoMaxSpec}
         * @param ioMaxSpec Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.
         *                  When filling in at the same time, subject to IoMaxSpec.
         *                  It is recommended that you only fill in the flow specification
         * @return {@code this}
         */
        public Builder ioMaxSpec(java.lang.String ioMaxSpec) {
            this.ioMaxSpec = ioMaxSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIoMaxSpec}
         * @param ioMaxSpec Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.
         *                  When filling in at the same time, subject to IoMaxSpec.
         *                  It is recommended that you only fill in the flow specification
         * @return {@code this}
         */
        public Builder ioMaxSpec(com.aliyun.ros.cdk.core.IResolvable ioMaxSpec) {
            this.ioMaxSpec = ioMaxSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getOpenConnector}
         * @param openConnector Property openConnector: Whether open kafka connector or not.
         * @return {@code this}
         */
        public Builder openConnector(java.lang.Boolean openConnector) {
            this.openConnector = openConnector;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getOpenConnector}
         * @param openConnector Property openConnector: Whether open kafka connector or not.
         * @return {@code this}
         */
        public Builder openConnector(com.aliyun.ros.cdk.core.IResolvable openConnector) {
            this.openConnector = openConnector;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPayType}
         * @param payType Property payType: Pay by hour or month.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPayType}
         * @param payType Property payType: Pay by hour or month.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSpecType}
         * @param specType Property specType: The edition of the Message Queue for Apache Kafka instance.
         *                 Valid values:
         *                 professional: Professional Edition
         *                 normal: Normal version
         * @return {@code this}
         */
        public Builder specType(java.lang.String specType) {
            this.specType = specType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSpecType}
         * @param specType Property specType: The edition of the Message Queue for Apache Kafka instance.
         *                 Valid values:
         *                 professional: Professional Edition
         *                 normal: Normal version
         * @return {@code this}
         */
        public Builder specType(com.aliyun.ros.cdk.core.IResolvable specType) {
            this.specType = specType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object deployType;
        private final java.lang.Object diskSize;
        private final java.lang.Object diskType;
        private final java.lang.Object topicQuota;
        private final java.lang.Object deletionForce;
        private final java.lang.Object deployOption;
        private final java.lang.Object eipMax;
        private final java.lang.Object ioMax;
        private final java.lang.Object ioMaxSpec;
        private final java.lang.Object openConnector;
        private final java.lang.Object payType;
        private final java.lang.Object specType;
        private final java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deployType = software.amazon.jsii.Kernel.get(this, "deployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topicQuota = software.amazon.jsii.Kernel.get(this, "topicQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployOption = software.amazon.jsii.Kernel.get(this, "deployOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eipMax = software.amazon.jsii.Kernel.get(this, "eipMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioMax = software.amazon.jsii.Kernel.get(this, "ioMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioMaxSpec = software.amazon.jsii.Kernel.get(this, "ioMaxSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.openConnector = software.amazon.jsii.Kernel.get(this, "openConnector", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.specType = software.amazon.jsii.Kernel.get(this, "specType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deployType = java.util.Objects.requireNonNull(builder.deployType, "deployType is required");
            this.diskSize = java.util.Objects.requireNonNull(builder.diskSize, "diskSize is required");
            this.diskType = java.util.Objects.requireNonNull(builder.diskType, "diskType is required");
            this.topicQuota = java.util.Objects.requireNonNull(builder.topicQuota, "topicQuota is required");
            this.deletionForce = builder.deletionForce;
            this.deployOption = builder.deployOption;
            this.eipMax = builder.eipMax;
            this.ioMax = builder.ioMax;
            this.ioMaxSpec = builder.ioMaxSpec;
            this.openConnector = builder.openConnector;
            this.payType = builder.payType;
            this.specType = builder.specType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getDeployType() {
            return this.deployType;
        }

        @Override
        public final java.lang.Object getDiskSize() {
            return this.diskSize;
        }

        @Override
        public final java.lang.Object getDiskType() {
            return this.diskType;
        }

        @Override
        public final java.lang.Object getTopicQuota() {
            return this.topicQuota;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getDeployOption() {
            return this.deployOption;
        }

        @Override
        public final java.lang.Object getEipMax() {
            return this.eipMax;
        }

        @Override
        public final java.lang.Object getIoMax() {
            return this.ioMax;
        }

        @Override
        public final java.lang.Object getIoMaxSpec() {
            return this.ioMaxSpec;
        }

        @Override
        public final java.lang.Object getOpenConnector() {
            return this.openConnector;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getSpecType() {
            return this.specType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("deployType", om.valueToTree(this.getDeployType()));
            data.set("diskSize", om.valueToTree(this.getDiskSize()));
            data.set("diskType", om.valueToTree(this.getDiskType()));
            data.set("topicQuota", om.valueToTree(this.getTopicQuota()));
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDeployOption() != null) {
                data.set("deployOption", om.valueToTree(this.getDeployOption()));
            }
            if (this.getEipMax() != null) {
                data.set("eipMax", om.valueToTree(this.getEipMax()));
            }
            if (this.getIoMax() != null) {
                data.set("ioMax", om.valueToTree(this.getIoMax()));
            }
            if (this.getIoMaxSpec() != null) {
                data.set("ioMaxSpec", om.valueToTree(this.getIoMaxSpec()));
            }
            if (this.getOpenConnector() != null) {
                data.set("openConnector", om.valueToTree(this.getOpenConnector()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getSpecType() != null) {
                data.set("specType", om.valueToTree(this.getSpecType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!deployType.equals(that.deployType)) return false;
            if (!diskSize.equals(that.diskSize)) return false;
            if (!diskType.equals(that.diskType)) return false;
            if (!topicQuota.equals(that.topicQuota)) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.deployOption != null ? !this.deployOption.equals(that.deployOption) : that.deployOption != null) return false;
            if (this.eipMax != null ? !this.eipMax.equals(that.eipMax) : that.eipMax != null) return false;
            if (this.ioMax != null ? !this.ioMax.equals(that.ioMax) : that.ioMax != null) return false;
            if (this.ioMaxSpec != null ? !this.ioMaxSpec.equals(that.ioMaxSpec) : that.ioMaxSpec != null) return false;
            if (this.openConnector != null ? !this.openConnector.equals(that.openConnector) : that.openConnector != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.specType != null ? !this.specType.equals(that.specType) : that.specType != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deployType.hashCode();
            result = 31 * result + (this.diskSize.hashCode());
            result = 31 * result + (this.diskType.hashCode());
            result = 31 * result + (this.topicQuota.hashCode());
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.deployOption != null ? this.deployOption.hashCode() : 0);
            result = 31 * result + (this.eipMax != null ? this.eipMax.hashCode() : 0);
            result = 31 * result + (this.ioMax != null ? this.ioMax.hashCode() : 0);
            result = 31 * result + (this.ioMaxSpec != null ? this.ioMaxSpec.hashCode() : 0);
            result = 31 * result + (this.openConnector != null ? this.openConnector.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.specType != null ? this.specType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
