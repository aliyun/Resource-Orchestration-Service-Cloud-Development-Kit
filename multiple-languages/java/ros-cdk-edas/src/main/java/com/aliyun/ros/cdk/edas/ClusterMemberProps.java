package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a `ALIYUN::EDAS::ClusterMember`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.831Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.ClusterMemberProps")
@software.amazon.jsii.Jsii.Proxy(ClusterMemberProps.Jsii$Proxy.class)
public interface ClusterMemberProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getInstanceIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPassword();

    /**
     * @return a {@link Builder} of {@link ClusterMemberProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterMemberProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterMemberProps> {
        private java.lang.String clusterId;
        private java.util.List<java.lang.String> instanceIds;
        private java.lang.String password;

        /**
         * Sets the value of {@link ClusterMemberProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterMemberProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<java.lang.String> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link ClusterMemberProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterMemberProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterMemberProps build() {
            return new Jsii$Proxy(clusterId, instanceIds, password);
        }
    }

    /**
     * An implementation for {@link ClusterMemberProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterMemberProps {
        private final java.lang.String clusterId;
        private final java.util.List<java.lang.String> instanceIds;
        private final java.lang.String password;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String clusterId, final java.util.List<java.lang.String> instanceIds, final java.lang.String password) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(clusterId, "clusterId is required");
            this.instanceIds = java.util.Objects.requireNonNull(instanceIds, "instanceIds is required");
            this.password = java.util.Objects.requireNonNull(password, "password is required");
        }

        @Override
        public final java.lang.String getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.util.List<java.lang.String> getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.String getPassword() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.ClusterMemberProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterMemberProps.Jsii$Proxy that = (ClusterMemberProps.Jsii$Proxy) o;

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
