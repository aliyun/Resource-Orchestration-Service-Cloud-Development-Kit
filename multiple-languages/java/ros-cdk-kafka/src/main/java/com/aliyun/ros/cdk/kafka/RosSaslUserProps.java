package com.aliyun.ros.cdk.kafka;

/**
 * Properties for defining a <code>RosSaslUser</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:09.065Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.RosSaslUserProps")
@software.amazon.jsii.Jsii.Proxy(RosSaslUserProps.Jsii$Proxy.class)
public interface RosSaslUserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsername();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMechanism() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSaslUserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSaslUserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSaslUserProps> {
        java.lang.Object instanceId;
        java.lang.Object password;
        java.lang.Object username;
        java.lang.Object mechanism;
        java.lang.Object type;

        /**
         * Sets the value of {@link RosSaslUserProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSaslUserProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSaslUserProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosSaslUserProps#getPassword}
         * @param password the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosSaslUserProps#getUsername}
         * @param username the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RosSaslUserProps#getUsername}
         * @param username the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RosSaslUserProps#getMechanism}
         * @param mechanism the value to be set.
         * @return {@code this}
         */
        public Builder mechanism(java.lang.String mechanism) {
            this.mechanism = mechanism;
            return this;
        }

        /**
         * Sets the value of {@link RosSaslUserProps#getMechanism}
         * @param mechanism the value to be set.
         * @return {@code this}
         */
        public Builder mechanism(com.aliyun.ros.cdk.core.IResolvable mechanism) {
            this.mechanism = mechanism;
            return this;
        }

        /**
         * Sets the value of {@link RosSaslUserProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosSaslUserProps#getType}
         * @param type the value to be set.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSaslUserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSaslUserProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSaslUserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSaslUserProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object password;
        private final java.lang.Object username;
        private final java.lang.Object mechanism;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mechanism = software.amazon.jsii.Kernel.get(this, "mechanism", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            this.username = java.util.Objects.requireNonNull(builder.username, "username is required");
            this.mechanism = builder.mechanism;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getUsername() {
            return this.username;
        }

        @Override
        public final java.lang.Object getMechanism() {
            return this.mechanism;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("password", om.valueToTree(this.getPassword()));
            data.set("username", om.valueToTree(this.getUsername()));
            if (this.getMechanism() != null) {
                data.set("mechanism", om.valueToTree(this.getMechanism()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.RosSaslUserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSaslUserProps.Jsii$Proxy that = (RosSaslUserProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!password.equals(that.password)) return false;
            if (!username.equals(that.username)) return false;
            if (this.mechanism != null ? !this.mechanism.equals(that.mechanism) : that.mechanism != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.username.hashCode());
            result = 31 * result + (this.mechanism != null ? this.mechanism.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
