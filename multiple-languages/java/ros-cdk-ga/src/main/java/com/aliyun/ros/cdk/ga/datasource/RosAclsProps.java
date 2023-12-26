package com.aliyun.ros.cdk.ga.datasource;

/**
 * Properties for defining a <code>RosAcls</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:16.492Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.datasource.RosAclsProps")
@software.amazon.jsii.Jsii.Proxy(RosAclsProps.Jsii$Proxy.class)
public interface RosAclsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAclsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAclsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAclsProps> {
        java.lang.Object aclId;
        java.lang.Object aclName;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosAclsProps#getAclId}
         * @param aclId the value to be set.
         * @return {@code this}
         */
        public Builder aclId(java.lang.String aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link RosAclsProps#getAclId}
         * @param aclId the value to be set.
         * @return {@code this}
         */
        public Builder aclId(com.aliyun.ros.cdk.core.IResolvable aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link RosAclsProps#getAclName}
         * @param aclName the value to be set.
         * @return {@code this}
         */
        public Builder aclName(java.lang.String aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link RosAclsProps#getAclName}
         * @param aclName the value to be set.
         * @return {@code this}
         */
        public Builder aclName(com.aliyun.ros.cdk.core.IResolvable aclName) {
            this.aclName = aclName;
            return this;
        }

        /**
         * Sets the value of {@link RosAclsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosAclsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAclsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAclsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAclsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAclsProps {
        private final java.lang.Object aclId;
        private final java.lang.Object aclName;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclId = software.amazon.jsii.Kernel.get(this, "aclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclName = software.amazon.jsii.Kernel.get(this, "aclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclId = builder.aclId;
            this.aclName = builder.aclName;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getAclId() {
            return this.aclId;
        }

        @Override
        public final java.lang.Object getAclName() {
            return this.aclName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAclId() != null) {
                data.set("aclId", om.valueToTree(this.getAclId()));
            }
            if (this.getAclName() != null) {
                data.set("aclName", om.valueToTree(this.getAclName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.datasource.RosAclsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAclsProps.Jsii$Proxy that = (RosAclsProps.Jsii$Proxy) o;

            if (this.aclId != null ? !this.aclId.equals(that.aclId) : that.aclId != null) return false;
            if (this.aclName != null ? !this.aclName.equals(that.aclName) : that.aclName != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclId != null ? this.aclId.hashCode() : 0;
            result = 31 * result + (this.aclName != null ? this.aclName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
