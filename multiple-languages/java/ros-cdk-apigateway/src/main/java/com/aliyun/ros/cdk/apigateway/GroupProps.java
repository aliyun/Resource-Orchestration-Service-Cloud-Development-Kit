package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::Group`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:18.147Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.GroupProps")
@software.amazon.jsii.Jsii.Proxy(GroupProps.Jsii$Proxy.class)
public interface GroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * Property description: Description of the Group, less than 180 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property instanceId: API gateway instance ID.
     * <p>
     * For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property internetEnable: Enable or disable internet subdomain.
     * <p>
     * True for enable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetEnable() {
        return null;
    }

    /**
     * Property passthroughHeaders: Pass through headers setting.
     * <p>
     * values:
     * host: pass through host headers
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassthroughHeaders() {
        return null;
    }

    /**
     * Property tags: Tags to attach to group.
     * <p>
     * Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcIntranetEnable: Enable or disable VPC intranet subdomain.
     * <p>
     * True for enable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcIntranetEnable() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GroupProps> {
        java.lang.Object groupName;
        java.lang.Object description;
        java.lang.Object instanceId;
        java.lang.Object internetEnable;
        java.lang.Object passthroughHeaders;
        java.util.List<com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty> tags;
        java.lang.Object vpcIntranetEnable;

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getGroupName}
         * @param groupName Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getDescription}
         * @param description Property description: Description of the Group, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getDescription}
         * @param description Property description: Description of the Group, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getInstanceId}
         * @param instanceId Property instanceId: API gateway instance ID.
         *                   For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getInstanceId}
         * @param instanceId Property instanceId: API gateway instance ID.
         *                   For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getInternetEnable}
         * @param internetEnable Property internetEnable: Enable or disable internet subdomain.
         *                       True for enable.
         * @return {@code this}
         */
        public Builder internetEnable(java.lang.Boolean internetEnable) {
            this.internetEnable = internetEnable;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getInternetEnable}
         * @param internetEnable Property internetEnable: Enable or disable internet subdomain.
         *                       True for enable.
         * @return {@code this}
         */
        public Builder internetEnable(com.aliyun.ros.cdk.core.IResolvable internetEnable) {
            this.internetEnable = internetEnable;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPassthroughHeaders}
         * @param passthroughHeaders Property passthroughHeaders: Pass through headers setting.
         *                           values:
         *                           host: pass through host headers
         * @return {@code this}
         */
        public Builder passthroughHeaders(java.lang.String passthroughHeaders) {
            this.passthroughHeaders = passthroughHeaders;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getPassthroughHeaders}
         * @param passthroughHeaders Property passthroughHeaders: Pass through headers setting.
         *                           values:
         *                           host: pass through host headers
         * @return {@code this}
         */
        public Builder passthroughHeaders(com.aliyun.ros.cdk.core.IResolvable passthroughHeaders) {
            this.passthroughHeaders = passthroughHeaders;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getTags}
         * @param tags Property tags: Tags to attach to group.
         *             Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getVpcIntranetEnable}
         * @param vpcIntranetEnable Property vpcIntranetEnable: Enable or disable VPC intranet subdomain.
         *                          True for enable.
         * @return {@code this}
         */
        public Builder vpcIntranetEnable(java.lang.Boolean vpcIntranetEnable) {
            this.vpcIntranetEnable = vpcIntranetEnable;
            return this;
        }

        /**
         * Sets the value of {@link GroupProps#getVpcIntranetEnable}
         * @param vpcIntranetEnable Property vpcIntranetEnable: Enable or disable VPC intranet subdomain.
         *                          True for enable.
         * @return {@code this}
         */
        public Builder vpcIntranetEnable(com.aliyun.ros.cdk.core.IResolvable vpcIntranetEnable) {
            this.vpcIntranetEnable = vpcIntranetEnable;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GroupProps {
        private final java.lang.Object groupName;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.GroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GroupProps.Jsii$Proxy that = (GroupProps.Jsii$Proxy) o;

            if (!groupName.equals(that.groupName)) return false;
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
