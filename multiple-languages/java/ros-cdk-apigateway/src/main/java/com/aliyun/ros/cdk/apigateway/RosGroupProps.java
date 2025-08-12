package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>RosGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-group
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.810Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosGroupProps.Jsii$Proxy.class)
public interface RosGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBasePath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassthroughHeaders() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcIntranetEnable() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGroupProps> {
        java.lang.Object groupName;
        java.lang.Object basePath;
        java.lang.Object description;
        java.lang.Object instanceId;
        java.lang.Object internetEnable;
        java.lang.Object passthroughHeaders;
        java.util.List<com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty> tags;
        java.lang.Object vpcIntranetEnable;

        /**
         * Sets the value of {@link RosGroupProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getBasePath}
         * @param basePath the value to be set.
         * @return {@code this}
         */
        public Builder basePath(java.lang.String basePath) {
            this.basePath = basePath;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getBasePath}
         * @param basePath the value to be set.
         * @return {@code this}
         */
        public Builder basePath(com.aliyun.ros.cdk.core.IResolvable basePath) {
            this.basePath = basePath;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getInternetEnable}
         * @param internetEnable the value to be set.
         * @return {@code this}
         */
        public Builder internetEnable(java.lang.Boolean internetEnable) {
            this.internetEnable = internetEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getInternetEnable}
         * @param internetEnable the value to be set.
         * @return {@code this}
         */
        public Builder internetEnable(com.aliyun.ros.cdk.core.IResolvable internetEnable) {
            this.internetEnable = internetEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getPassthroughHeaders}
         * @param passthroughHeaders the value to be set.
         * @return {@code this}
         */
        public Builder passthroughHeaders(java.lang.String passthroughHeaders) {
            this.passthroughHeaders = passthroughHeaders;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getPassthroughHeaders}
         * @param passthroughHeaders the value to be set.
         * @return {@code this}
         */
        public Builder passthroughHeaders(com.aliyun.ros.cdk.core.IResolvable passthroughHeaders) {
            this.passthroughHeaders = passthroughHeaders;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getVpcIntranetEnable}
         * @param vpcIntranetEnable the value to be set.
         * @return {@code this}
         */
        public Builder vpcIntranetEnable(java.lang.Boolean vpcIntranetEnable) {
            this.vpcIntranetEnable = vpcIntranetEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupProps#getVpcIntranetEnable}
         * @param vpcIntranetEnable the value to be set.
         * @return {@code this}
         */
        public Builder vpcIntranetEnable(com.aliyun.ros.cdk.core.IResolvable vpcIntranetEnable) {
            this.vpcIntranetEnable = vpcIntranetEnable;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGroupProps {
        private final java.lang.Object groupName;
        private final java.lang.Object basePath;
        private final java.lang.Object description;
        private final java.lang.Object instanceId;
        private final java.lang.Object internetEnable;
        private final java.lang.Object passthroughHeaders;
        private final java.util.List<com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty> tags;
        private final java.lang.Object vpcIntranetEnable;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.basePath = software.amazon.jsii.Kernel.get(this, "basePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetEnable = software.amazon.jsii.Kernel.get(this, "internetEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passthroughHeaders = software.amazon.jsii.Kernel.get(this, "passthroughHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty.class)));
            this.vpcIntranetEnable = software.amazon.jsii.Kernel.get(this, "vpcIntranetEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.basePath = builder.basePath;
            this.description = builder.description;
            this.instanceId = builder.instanceId;
            this.internetEnable = builder.internetEnable;
            this.passthroughHeaders = builder.passthroughHeaders;
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty>)builder.tags;
            this.vpcIntranetEnable = builder.vpcIntranetEnable;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getBasePath() {
            return this.basePath;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInternetEnable() {
            return this.internetEnable;
        }

        @Override
        public final java.lang.Object getPassthroughHeaders() {
            return this.passthroughHeaders;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVpcIntranetEnable() {
            return this.vpcIntranetEnable;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupName", om.valueToTree(this.getGroupName()));
            if (this.getBasePath() != null) {
                data.set("basePath", om.valueToTree(this.getBasePath()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getInternetEnable() != null) {
                data.set("internetEnable", om.valueToTree(this.getInternetEnable()));
            }
            if (this.getPassthroughHeaders() != null) {
                data.set("passthroughHeaders", om.valueToTree(this.getPassthroughHeaders()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcIntranetEnable() != null) {
                data.set("vpcIntranetEnable", om.valueToTree(this.getVpcIntranetEnable()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGroupProps.Jsii$Proxy that = (RosGroupProps.Jsii$Proxy) o;

            if (!groupName.equals(that.groupName)) return false;
            if (this.basePath != null ? !this.basePath.equals(that.basePath) : that.basePath != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.internetEnable != null ? !this.internetEnable.equals(that.internetEnable) : that.internetEnable != null) return false;
            if (this.passthroughHeaders != null ? !this.passthroughHeaders.equals(that.passthroughHeaders) : that.passthroughHeaders != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.vpcIntranetEnable != null ? this.vpcIntranetEnable.equals(that.vpcIntranetEnable) : that.vpcIntranetEnable == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupName.hashCode();
            result = 31 * result + (this.basePath != null ? this.basePath.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.internetEnable != null ? this.internetEnable.hashCode() : 0);
            result = 31 * result + (this.passthroughHeaders != null ? this.passthroughHeaders.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcIntranetEnable != null ? this.vpcIntranetEnable.hashCode() : 0);
            return result;
        }
    }
}
