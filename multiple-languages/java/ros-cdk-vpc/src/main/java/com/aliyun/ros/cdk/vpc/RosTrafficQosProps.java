package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosTrafficQos</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqos
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:31.089Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficQosProps")
@software.amazon.jsii.Jsii.Proxy(RosTrafficQosProps.Jsii$Proxy.class)
public interface RosTrafficQosProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQosDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQosName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosTrafficQos.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTrafficQosProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrafficQosProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrafficQosProps> {
        java.lang.Object qosDescription;
        java.lang.Object qosName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.vpc.RosTrafficQos.TagsProperty> tags;

        /**
         * Sets the value of {@link RosTrafficQosProps#getQosDescription}
         * @param qosDescription the value to be set.
         * @return {@code this}
         */
        public Builder qosDescription(java.lang.String qosDescription) {
            this.qosDescription = qosDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosProps#getQosDescription}
         * @param qosDescription the value to be set.
         * @return {@code this}
         */
        public Builder qosDescription(com.aliyun.ros.cdk.core.IResolvable qosDescription) {
            this.qosDescription = qosDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosProps#getQosName}
         * @param qosName the value to be set.
         * @return {@code this}
         */
        public Builder qosName(java.lang.String qosName) {
            this.qosName = qosName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosProps#getQosName}
         * @param qosName the value to be set.
         * @return {@code this}
         */
        public Builder qosName(com.aliyun.ros.cdk.core.IResolvable qosName) {
            this.qosName = qosName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosTrafficQos.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosTrafficQos.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrafficQosProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrafficQosProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrafficQosProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrafficQosProps {
        private final java.lang.Object qosDescription;
        private final java.lang.Object qosName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosTrafficQos.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.qosDescription = software.amazon.jsii.Kernel.get(this, "qosDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qosName = software.amazon.jsii.Kernel.get(this, "qosName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosTrafficQos.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.qosDescription = builder.qosDescription;
            this.qosName = builder.qosName;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosTrafficQos.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getQosDescription() {
            return this.qosDescription;
        }

        @Override
        public final java.lang.Object getQosName() {
            return this.qosName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosTrafficQos.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getQosDescription() != null) {
                data.set("qosDescription", om.valueToTree(this.getQosDescription()));
            }
            if (this.getQosName() != null) {
                data.set("qosName", om.valueToTree(this.getQosName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosTrafficQosProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrafficQosProps.Jsii$Proxy that = (RosTrafficQosProps.Jsii$Proxy) o;

            if (this.qosDescription != null ? !this.qosDescription.equals(that.qosDescription) : that.qosDescription != null) return false;
            if (this.qosName != null ? !this.qosName.equals(that.qosName) : that.qosName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.qosDescription != null ? this.qosDescription.hashCode() : 0;
            result = 31 * result + (this.qosName != null ? this.qosName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
