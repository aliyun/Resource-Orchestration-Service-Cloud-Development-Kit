package com.aliyun.ros.cdk.kafka;

/**
 * Properties for defining a <code>RosInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.706Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeployType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployOption() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipMax() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoMax() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoMaxSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOpenConnector() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPartitionNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerlessConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpecType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTopicQuota() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceProps> {
        java.lang.Object deployType;
        java.lang.Object deletionForce;
        java.lang.Object deployOption;
        java.lang.Object diskSize;
        java.lang.Object diskType;
        java.lang.Object eipMax;
        java.lang.Object ioMax;
        java.lang.Object ioMaxSpec;
        java.lang.Object openConnector;
        java.lang.Object partitionNum;
        java.lang.Object payType;
        java.lang.Object serverlessConfig;
        java.lang.Object specType;
        java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> tags;
        java.lang.Object topicQuota;

        /**
         * Sets the value of {@link RosInstanceProps#getDeployType}
         * @param deployType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deployType(java.lang.Number deployType) {
            this.deployType = deployType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDeployType}
         * @param deployType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deployType(com.aliyun.ros.cdk.core.IResolvable deployType) {
            this.deployType = deployType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDeployOption}
         * @param deployOption the value to be set.
         * @return {@code this}
         */
        public Builder deployOption(com.aliyun.ros.cdk.core.IResolvable deployOption) {
            this.deployOption = deployOption;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDeployOption}
         * @param deployOption the value to be set.
         * @return {@code this}
         */
        public Builder deployOption(com.aliyun.ros.cdk.kafka.RosInstance.DeployOptionProperty deployOption) {
            this.deployOption = deployOption;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDiskSize}
         * @param diskSize the value to be set.
         * @return {@code this}
         */
        public Builder diskSize(java.lang.Number diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDiskSize}
         * @param diskSize the value to be set.
         * @return {@code this}
         */
        public Builder diskSize(com.aliyun.ros.cdk.core.IResolvable diskSize) {
            this.diskSize = diskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDiskType}
         * @param diskType the value to be set.
         * @return {@code this}
         */
        public Builder diskType(java.lang.String diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getDiskType}
         * @param diskType the value to be set.
         * @return {@code this}
         */
        public Builder diskType(com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEipMax}
         * @param eipMax the value to be set.
         * @return {@code this}
         */
        public Builder eipMax(java.lang.Number eipMax) {
            this.eipMax = eipMax;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getEipMax}
         * @param eipMax the value to be set.
         * @return {@code this}
         */
        public Builder eipMax(com.aliyun.ros.cdk.core.IResolvable eipMax) {
            this.eipMax = eipMax;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getIoMax}
         * @param ioMax the value to be set.
         * @return {@code this}
         */
        public Builder ioMax(java.lang.Number ioMax) {
            this.ioMax = ioMax;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getIoMax}
         * @param ioMax the value to be set.
         * @return {@code this}
         */
        public Builder ioMax(com.aliyun.ros.cdk.core.IResolvable ioMax) {
            this.ioMax = ioMax;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getIoMaxSpec}
         * @param ioMaxSpec the value to be set.
         * @return {@code this}
         */
        public Builder ioMaxSpec(java.lang.String ioMaxSpec) {
            this.ioMaxSpec = ioMaxSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getIoMaxSpec}
         * @param ioMaxSpec the value to be set.
         * @return {@code this}
         */
        public Builder ioMaxSpec(com.aliyun.ros.cdk.core.IResolvable ioMaxSpec) {
            this.ioMaxSpec = ioMaxSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getOpenConnector}
         * @param openConnector the value to be set.
         * @return {@code this}
         */
        public Builder openConnector(java.lang.Boolean openConnector) {
            this.openConnector = openConnector;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getOpenConnector}
         * @param openConnector the value to be set.
         * @return {@code this}
         */
        public Builder openConnector(com.aliyun.ros.cdk.core.IResolvable openConnector) {
            this.openConnector = openConnector;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPartitionNum}
         * @param partitionNum the value to be set.
         * @return {@code this}
         */
        public Builder partitionNum(java.lang.Number partitionNum) {
            this.partitionNum = partitionNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPartitionNum}
         * @param partitionNum the value to be set.
         * @return {@code this}
         */
        public Builder partitionNum(com.aliyun.ros.cdk.core.IResolvable partitionNum) {
            this.partitionNum = partitionNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getServerlessConfig}
         * @param serverlessConfig the value to be set.
         * @return {@code this}
         */
        public Builder serverlessConfig(com.aliyun.ros.cdk.core.IResolvable serverlessConfig) {
            this.serverlessConfig = serverlessConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getServerlessConfig}
         * @param serverlessConfig the value to be set.
         * @return {@code this}
         */
        public Builder serverlessConfig(com.aliyun.ros.cdk.kafka.RosInstance.ServerlessConfigProperty serverlessConfig) {
            this.serverlessConfig = serverlessConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSpecType}
         * @param specType the value to be set.
         * @return {@code this}
         */
        public Builder specType(java.lang.String specType) {
            this.specType = specType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSpecType}
         * @param specType the value to be set.
         * @return {@code this}
         */
        public Builder specType(com.aliyun.ros.cdk.core.IResolvable specType) {
            this.specType = specType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTopicQuota}
         * @param topicQuota the value to be set.
         * @return {@code this}
         */
        public Builder topicQuota(java.lang.Number topicQuota) {
            this.topicQuota = topicQuota;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTopicQuota}
         * @param topicQuota the value to be set.
         * @return {@code this}
         */
        public Builder topicQuota(com.aliyun.ros.cdk.core.IResolvable topicQuota) {
            this.topicQuota = topicQuota;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object deployType;
        private final java.lang.Object deletionForce;
        private final java.lang.Object deployOption;
        private final java.lang.Object diskSize;
        private final java.lang.Object diskType;
        private final java.lang.Object eipMax;
        private final java.lang.Object ioMax;
        private final java.lang.Object ioMaxSpec;
        private final java.lang.Object openConnector;
        private final java.lang.Object partitionNum;
        private final java.lang.Object payType;
        private final java.lang.Object serverlessConfig;
        private final java.lang.Object specType;
        private final java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty> tags;
        private final java.lang.Object topicQuota;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deployType = software.amazon.jsii.Kernel.get(this, "deployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployOption = software.amazon.jsii.Kernel.get(this, "deployOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eipMax = software.amazon.jsii.Kernel.get(this, "eipMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioMax = software.amazon.jsii.Kernel.get(this, "ioMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioMaxSpec = software.amazon.jsii.Kernel.get(this, "ioMaxSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.openConnector = software.amazon.jsii.Kernel.get(this, "openConnector", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.partitionNum = software.amazon.jsii.Kernel.get(this, "partitionNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverlessConfig = software.amazon.jsii.Kernel.get(this, "serverlessConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.specType = software.amazon.jsii.Kernel.get(this, "specType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty.class)));
            this.topicQuota = software.amazon.jsii.Kernel.get(this, "topicQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deployType = java.util.Objects.requireNonNull(builder.deployType, "deployType is required");
            this.deletionForce = builder.deletionForce;
            this.deployOption = builder.deployOption;
            this.diskSize = builder.diskSize;
            this.diskType = builder.diskType;
            this.eipMax = builder.eipMax;
            this.ioMax = builder.ioMax;
            this.ioMaxSpec = builder.ioMaxSpec;
            this.openConnector = builder.openConnector;
            this.partitionNum = builder.partitionNum;
            this.payType = builder.payType;
            this.serverlessConfig = builder.serverlessConfig;
            this.specType = builder.specType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.kafka.RosInstance.TagsProperty>)builder.tags;
            this.topicQuota = builder.topicQuota;
        }

        @Override
        public final java.lang.Object getDeployType() {
            return this.deployType;
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
        public final java.lang.Object getDiskSize() {
            return this.diskSize;
        }

        @Override
        public final java.lang.Object getDiskType() {
            return this.diskType;
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
        public final java.lang.Object getPartitionNum() {
            return this.partitionNum;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getServerlessConfig() {
            return this.serverlessConfig;
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
        public final java.lang.Object getTopicQuota() {
            return this.topicQuota;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("deployType", om.valueToTree(this.getDeployType()));
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDeployOption() != null) {
                data.set("deployOption", om.valueToTree(this.getDeployOption()));
            }
            if (this.getDiskSize() != null) {
                data.set("diskSize", om.valueToTree(this.getDiskSize()));
            }
            if (this.getDiskType() != null) {
                data.set("diskType", om.valueToTree(this.getDiskType()));
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
            if (this.getPartitionNum() != null) {
                data.set("partitionNum", om.valueToTree(this.getPartitionNum()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getServerlessConfig() != null) {
                data.set("serverlessConfig", om.valueToTree(this.getServerlessConfig()));
            }
            if (this.getSpecType() != null) {
                data.set("specType", om.valueToTree(this.getSpecType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTopicQuota() != null) {
                data.set("topicQuota", om.valueToTree(this.getTopicQuota()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.RosInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceProps.Jsii$Proxy that = (RosInstanceProps.Jsii$Proxy) o;

            if (!deployType.equals(that.deployType)) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.deployOption != null ? !this.deployOption.equals(that.deployOption) : that.deployOption != null) return false;
            if (this.diskSize != null ? !this.diskSize.equals(that.diskSize) : that.diskSize != null) return false;
            if (this.diskType != null ? !this.diskType.equals(that.diskType) : that.diskType != null) return false;
            if (this.eipMax != null ? !this.eipMax.equals(that.eipMax) : that.eipMax != null) return false;
            if (this.ioMax != null ? !this.ioMax.equals(that.ioMax) : that.ioMax != null) return false;
            if (this.ioMaxSpec != null ? !this.ioMaxSpec.equals(that.ioMaxSpec) : that.ioMaxSpec != null) return false;
            if (this.openConnector != null ? !this.openConnector.equals(that.openConnector) : that.openConnector != null) return false;
            if (this.partitionNum != null ? !this.partitionNum.equals(that.partitionNum) : that.partitionNum != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.serverlessConfig != null ? !this.serverlessConfig.equals(that.serverlessConfig) : that.serverlessConfig != null) return false;
            if (this.specType != null ? !this.specType.equals(that.specType) : that.specType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.topicQuota != null ? this.topicQuota.equals(that.topicQuota) : that.topicQuota == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deployType.hashCode();
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.deployOption != null ? this.deployOption.hashCode() : 0);
            result = 31 * result + (this.diskSize != null ? this.diskSize.hashCode() : 0);
            result = 31 * result + (this.diskType != null ? this.diskType.hashCode() : 0);
            result = 31 * result + (this.eipMax != null ? this.eipMax.hashCode() : 0);
            result = 31 * result + (this.ioMax != null ? this.ioMax.hashCode() : 0);
            result = 31 * result + (this.ioMaxSpec != null ? this.ioMaxSpec.hashCode() : 0);
            result = 31 * result + (this.openConnector != null ? this.openConnector.hashCode() : 0);
            result = 31 * result + (this.partitionNum != null ? this.partitionNum.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.serverlessConfig != null ? this.serverlessConfig.hashCode() : 0);
            result = 31 * result + (this.specType != null ? this.specType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.topicQuota != null ? this.topicQuota.hashCode() : 0);
            return result;
        }
    }
}
