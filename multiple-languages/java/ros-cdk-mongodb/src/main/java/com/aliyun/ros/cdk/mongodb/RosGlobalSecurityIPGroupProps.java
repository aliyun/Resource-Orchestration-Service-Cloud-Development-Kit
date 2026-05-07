package com.aliyun.ros.cdk.mongodb;

/**
 * Properties for defining a <code>RosGlobalSecurityIPGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.727Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosGlobalSecurityIPGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosGlobalSecurityIPGroupProps.Jsii$Proxy.class)
public interface RosGlobalSecurityIPGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGlobalIgName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGlobalSecurityIpList();

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
        java.lang.Object globalIgName;
        java.lang.Object globalSecurityIpList;

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
         * Sets the value of {@link RosGlobalSecurityIPGroupProps#getGlobalSecurityIpList}
         * @param globalSecurityIpList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder globalSecurityIpList(java.util.List<? extends java.lang.Object> globalSecurityIpList) {
            this.globalSecurityIpList = globalSecurityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosGlobalSecurityIPGroupProps#getGlobalSecurityIpList}
         * @param globalSecurityIpList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder globalSecurityIpList(com.aliyun.ros.cdk.core.IResolvable globalSecurityIpList) {
            this.globalSecurityIpList = globalSecurityIpList;
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
        private final java.lang.Object globalIgName;
        private final java.lang.Object globalSecurityIpList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.globalIgName = software.amazon.jsii.Kernel.get(this, "globalIgName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.globalSecurityIpList = software.amazon.jsii.Kernel.get(this, "globalSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.globalIgName = java.util.Objects.requireNonNull(builder.globalIgName, "globalIgName is required");
            this.globalSecurityIpList = java.util.Objects.requireNonNull(builder.globalSecurityIpList, "globalSecurityIpList is required");
        }

        @Override
        public final java.lang.Object getGlobalIgName() {
            return this.globalIgName;
        }

        @Override
        public final java.lang.Object getGlobalSecurityIpList() {
            return this.globalSecurityIpList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("globalIgName", om.valueToTree(this.getGlobalIgName()));
            data.set("globalSecurityIpList", om.valueToTree(this.getGlobalSecurityIpList()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosGlobalSecurityIPGroupProps"));
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

            if (!globalIgName.equals(that.globalIgName)) return false;
            return this.globalSecurityIpList.equals(that.globalSecurityIpList);
        }

        @Override
        public final int hashCode() {
            int result = this.globalIgName.hashCode();
            result = 31 * result + (this.globalSecurityIpList.hashCode());
            return result;
        }
    }
}
