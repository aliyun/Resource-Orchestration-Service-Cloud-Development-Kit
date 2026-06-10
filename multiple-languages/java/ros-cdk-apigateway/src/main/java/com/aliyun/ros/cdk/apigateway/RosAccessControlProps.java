package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>RosAccessControl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-accesscontrol
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:28:36.577Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosAccessControlProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessControlProps.Jsii$Proxy.class)
public interface RosAccessControlProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessControlListName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclEntrys() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAccessControlProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccessControlProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccessControlProps> {
        java.lang.Object accessControlListName;
        java.lang.Object aclEntrys;
        java.lang.Object addressIpVersion;

        /**
         * Sets the value of {@link RosAccessControlProps#getAccessControlListName}
         * @param accessControlListName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessControlListName(java.lang.String accessControlListName) {
            this.accessControlListName = accessControlListName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAccessControlListName}
         * @param accessControlListName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessControlListName(com.aliyun.ros.cdk.core.IResolvable accessControlListName) {
            this.accessControlListName = accessControlListName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAclEntrys}
         * @param aclEntrys the value to be set.
         * @return {@code this}
         */
        public Builder aclEntrys(com.aliyun.ros.cdk.core.IResolvable aclEntrys) {
            this.aclEntrys = aclEntrys;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAclEntrys}
         * @param aclEntrys the value to be set.
         * @return {@code this}
         */
        public Builder aclEntrys(java.util.List<? extends java.lang.Object> aclEntrys) {
            this.aclEntrys = aclEntrys;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAddressIpVersion}
         * @param addressIpVersion the value to be set.
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessControlProps#getAddressIpVersion}
         * @param addressIpVersion the value to be set.
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccessControlProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccessControlProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccessControlProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessControlProps {
        private final java.lang.Object accessControlListName;
        private final java.lang.Object aclEntrys;
        private final java.lang.Object addressIpVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessControlListName = software.amazon.jsii.Kernel.get(this, "accessControlListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclEntrys = software.amazon.jsii.Kernel.get(this, "aclEntrys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessControlListName = java.util.Objects.requireNonNull(builder.accessControlListName, "accessControlListName is required");
            this.aclEntrys = builder.aclEntrys;
            this.addressIpVersion = builder.addressIpVersion;
        }

        @Override
        public final java.lang.Object getAccessControlListName() {
            return this.accessControlListName;
        }

        @Override
        public final java.lang.Object getAclEntrys() {
            return this.aclEntrys;
        }

        @Override
        public final java.lang.Object getAddressIpVersion() {
            return this.addressIpVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessControlListName", om.valueToTree(this.getAccessControlListName()));
            if (this.getAclEntrys() != null) {
                data.set("aclEntrys", om.valueToTree(this.getAclEntrys()));
            }
            if (this.getAddressIpVersion() != null) {
                data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosAccessControlProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccessControlProps.Jsii$Proxy that = (RosAccessControlProps.Jsii$Proxy) o;

            if (!accessControlListName.equals(that.accessControlListName)) return false;
            if (this.aclEntrys != null ? !this.aclEntrys.equals(that.aclEntrys) : that.aclEntrys != null) return false;
            return this.addressIpVersion != null ? this.addressIpVersion.equals(that.addressIpVersion) : that.addressIpVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessControlListName.hashCode();
            result = 31 * result + (this.aclEntrys != null ? this.aclEntrys.hashCode() : 0);
            result = 31 * result + (this.addressIpVersion != null ? this.addressIpVersion.hashCode() : 0);
            return result;
        }
    }
}
