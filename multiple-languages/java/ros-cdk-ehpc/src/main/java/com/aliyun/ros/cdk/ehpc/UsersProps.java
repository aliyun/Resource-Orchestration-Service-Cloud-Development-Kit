package com.aliyun.ros.cdk.ehpc;

/**
 * Properties for defining a <code>ALIYUN::EHPC::Users</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:45.985Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.UsersProps")
@software.amazon.jsii.Jsii.Proxy(UsersProps.Jsii$Proxy.class)
public interface UsersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: The cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property users: The information about the users.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsers();

    /**
     * @return a {@link Builder} of {@link UsersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UsersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UsersProps> {
        java.lang.Object clusterId;
        java.lang.Object users;

        /**
         * Sets the value of {@link UsersProps#getClusterId}
         * @param clusterId Property clusterId: The cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link UsersProps#getClusterId}
         * @param clusterId Property clusterId: The cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link UsersProps#getUsers}
         * @param users Property users: The information about the users. This parameter is required.
         * @return {@code this}
         */
        public Builder users(com.aliyun.ros.cdk.core.IResolvable users) {
            this.users = users;
            return this;
        }

        /**
         * Sets the value of {@link UsersProps#getUsers}
         * @param users Property users: The information about the users. This parameter is required.
         * @return {@code this}
         */
        public Builder users(java.util.List<? extends java.lang.Object> users) {
            this.users = users;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UsersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UsersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UsersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UsersProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object users;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.users = software.amazon.jsii.Kernel.get(this, "users", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.users = java.util.Objects.requireNonNull(builder.users, "users is required");
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getUsers() {
            return this.users;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("users", om.valueToTree(this.getUsers()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.UsersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UsersProps.Jsii$Proxy that = (UsersProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            return this.users.equals(that.users);
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.users.hashCode());
            return result;
        }
    }
}
