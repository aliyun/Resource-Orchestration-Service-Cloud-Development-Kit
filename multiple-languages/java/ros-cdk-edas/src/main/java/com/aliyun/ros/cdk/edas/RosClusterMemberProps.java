package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a `ALIYUN::EDAS::ClusterMember`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:25.072Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosClusterMemberProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterMemberProps.Jsii$Proxy.class)
public interface RosClusterMemberProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     * @return a {@link Builder} of {@link RosClusterMemberProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterMemberProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterMemberProps> {
        java.lang.Object clusterId;
        java.lang.Object instanceIds;
        java.lang.Object password;

        /**
         * Sets the value of {@link RosClusterMemberProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterMemberProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterMemberProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterMemberProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterMemberProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterMemberProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterMemberProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterMemberProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClusterMemberProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterMemberProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object instanceIds;
        private final java.lang.Object password;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            data.set("password", om.valueToTree(this.getPassword()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosClusterMemberProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterMemberProps.Jsii$Proxy that = (RosClusterMemberProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (!instanceIds.equals(that.instanceIds)) return false;
            return this.password.equals(that.password);
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.instanceIds.hashCode());
            result = 31 * result + (this.password.hashCode());
            return result;
        }
    }
}
