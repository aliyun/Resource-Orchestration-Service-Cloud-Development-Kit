package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a <code>DeployGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.865Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.DeployGroupProps")
@software.amazon.jsii.Jsii.Proxy(DeployGroupProps.Jsii$Proxy.class)
public interface DeployGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appId: Application ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppId();

    /**
     * Property groupName: Group name, maximum length of 64.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * @return a {@link Builder} of {@link DeployGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DeployGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DeployGroupProps> {
        java.lang.Object appId;
        java.lang.Object groupName;

        /**
         * Sets the value of {@link DeployGroupProps#getAppId}
         * @param appId Property appId: Application ID. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link DeployGroupProps#getAppId}
         * @param appId Property appId: Application ID. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link DeployGroupProps#getGroupName}
         * @param groupName Property groupName: Group name, maximum length of 64. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link DeployGroupProps#getGroupName}
         * @param groupName Property groupName: Group name, maximum length of 64. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DeployGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DeployGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DeployGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeployGroupProps {
        private final java.lang.Object appId;
        private final java.lang.Object groupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = java.util.Objects.requireNonNull(builder.appId, "appId is required");
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appId", om.valueToTree(this.getAppId()));
            data.set("groupName", om.valueToTree(this.getGroupName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.DeployGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DeployGroupProps.Jsii$Proxy that = (DeployGroupProps.Jsii$Proxy) o;

            if (!appId.equals(that.appId)) return false;
            return this.groupName.equals(that.groupName);
        }

        @Override
        public final int hashCode() {
            int result = this.appId.hashCode();
            result = 31 * result + (this.groupName.hashCode());
            return result;
        }
    }
}
