package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>RosGlobalSecurityIPGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.083Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosGlobalSecurityIPGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosGlobalSecurityIPGroupProps.Jsii$Proxy.class)
public interface RosGlobalSecurityIPGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGIpList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGlobalIgName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGlobalSecurityIPGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGlobalSecurityIPGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGlobalSecurityIPGroupProps> {
        java.lang.Object gIpList;
        java.lang.Object globalIgName;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosGlobalSecurityIPGroupProps#getGIpList}
         * @param gIpList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gIpList(com.aliyun.ros.cdk.core.IResolvable gIpList) {
            this.gIpList = gIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosGlobalSecurityIPGroupProps#getGIpList}
         * @param gIpList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gIpList(java.util.List<? extends java.lang.Object> gIpList) {
            this.gIpList = gIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosGlobalSecurityIPGroupProps#getGlobalIgName}
         * @param globalIgName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder globalIgName(java.lang.String globalIgName) {
            this.globalIgName = globalIgName;
            return this;
        }

        /**
         * Sets the value of {@link RosGlobalSecurityIPGroupProps#getGlobalIgName}
         * @param globalIgName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder globalIgName(com.aliyun.ros.cdk.core.IResolvable globalIgName) {
            this.globalIgName = globalIgName;
            return this;
        }

        /**
         * Sets the value of {@link RosGlobalSecurityIPGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGlobalSecurityIPGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGlobalSecurityIPGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGlobalSecurityIPGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGlobalSecurityIPGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGlobalSecurityIPGroupProps {
        private final java.lang.Object gIpList;
        private final java.lang.Object globalIgName;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gIpList = software.amazon.jsii.Kernel.get(this, "gIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.globalIgName = software.amazon.jsii.Kernel.get(this, "globalIgName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gIpList = java.util.Objects.requireNonNull(builder.gIpList, "gIpList is required");
            this.globalIgName = java.util.Objects.requireNonNull(builder.globalIgName, "globalIgName is required");
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getGIpList() {
            return this.gIpList;
        }

        @Override
        public final java.lang.Object getGlobalIgName() {
            return this.globalIgName;
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

            data.set("gIpList", om.valueToTree(this.getGIpList()));
            data.set("globalIgName", om.valueToTree(this.getGlobalIgName()));
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosGlobalSecurityIPGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGlobalSecurityIPGroupProps.Jsii$Proxy that = (RosGlobalSecurityIPGroupProps.Jsii$Proxy) o;

            if (!gIpList.equals(that.gIpList)) return false;
            if (!globalIgName.equals(that.globalIgName)) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gIpList.hashCode();
            result = 31 * result + (this.globalIgName.hashCode());
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
