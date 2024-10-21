package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosSecurityGroupEgresses</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegresses
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:29.394Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSecurityGroupEgressesProps")
@software.amazon.jsii.Jsii.Proxy(RosSecurityGroupEgressesProps.Jsii$Proxy.class)
public interface RosSecurityGroupEgressesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPermissions();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     * @return a {@link Builder} of {@link RosSecurityGroupEgressesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecurityGroupEgressesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecurityGroupEgressesProps> {
        java.lang.Object permissions;
        java.lang.Object securityGroupId;

        /**
         * Sets the value of {@link RosSecurityGroupEgressesProps#getPermissions}
         * @param permissions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permissions(com.aliyun.ros.cdk.core.IResolvable permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressesProps#getPermissions}
         * @param permissions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder permissions(java.util.List<? extends java.lang.Object> permissions) {
            this.permissions = permissions;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressesProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityGroupEgressesProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecurityGroupEgressesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecurityGroupEgressesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSecurityGroupEgressesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecurityGroupEgressesProps {
        private final java.lang.Object permissions;
        private final java.lang.Object securityGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.permissions = software.amazon.jsii.Kernel.get(this, "permissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.permissions = java.util.Objects.requireNonNull(builder.permissions, "permissions is required");
            this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
        }

        @Override
        public final java.lang.Object getPermissions() {
            return this.permissions;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("permissions", om.valueToTree(this.getPermissions()));
            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSecurityGroupEgressesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecurityGroupEgressesProps.Jsii$Proxy that = (RosSecurityGroupEgressesProps.Jsii$Proxy) o;

            if (!permissions.equals(that.permissions)) return false;
            return this.securityGroupId.equals(that.securityGroupId);
        }

        @Override
        public final int hashCode() {
            int result = this.permissions.hashCode();
            result = 31 * result + (this.securityGroupId.hashCode());
            return result;
        }
    }
}
