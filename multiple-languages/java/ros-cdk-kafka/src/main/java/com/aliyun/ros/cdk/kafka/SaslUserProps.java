package com.aliyun.ros.cdk.kafka;

/**
 * Properties for defining a <code>SaslUser</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.657Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.SaslUserProps")
@software.amazon.jsii.Jsii.Proxy(SaslUserProps.Jsii$Proxy.class)
public interface SaslUserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property password: The password of the SASL user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     * Property username: The name of the SASL user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsername();

    /**
     * Property mechanism: The encryption method.
     * <p>
     * Valid values:
     * SCRAM-SHA-512 (default)
     * SCRAM-SHA-256
     * Note
     * This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMechanism() {
        return null;
    }

    /**
     * Property type: The type of the Simple Authentication and Security Layer (SASL) user.
     * <p>
     * Valid values:
     * plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
     * SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
     * LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
     * Default value: plain.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SaslUserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SaslUserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SaslUserProps> {
        java.lang.Object instanceId;
        java.lang.Object password;
        java.lang.Object username;
        java.lang.Object mechanism;
        java.lang.Object type;

        /**
         * Sets the value of {@link SaslUserProps#getInstanceId}
         * @param instanceId Property instanceId: The instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link SaslUserProps#getInstanceId}
         * @param instanceId Property instanceId: The instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link SaslUserProps#getPassword}
         * @param password Property password: The password of the SASL user. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link SaslUserProps#getPassword}
         * @param password Property password: The password of the SASL user. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link SaslUserProps#getUsername}
         * @param username Property username: The name of the SASL user. This parameter is required.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link SaslUserProps#getUsername}
         * @param username Property username: The name of the SASL user. This parameter is required.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link SaslUserProps#getMechanism}
         * @param mechanism Property mechanism: The encryption method.
         *                  Valid values:
         *                  SCRAM-SHA-512 (default)
         *                  SCRAM-SHA-256
         *                  Note
         *                  This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * @return {@code this}
         */
        public Builder mechanism(java.lang.String mechanism) {
            this.mechanism = mechanism;
            return this;
        }

        /**
         * Sets the value of {@link SaslUserProps#getMechanism}
         * @param mechanism Property mechanism: The encryption method.
         *                  Valid values:
         *                  SCRAM-SHA-512 (default)
         *                  SCRAM-SHA-256
         *                  Note
         *                  This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
         * @return {@code this}
         */
        public Builder mechanism(com.aliyun.ros.cdk.core.IResolvable mechanism) {
            this.mechanism = mechanism;
            return this;
        }

        /**
         * Sets the value of {@link SaslUserProps#getType}
         * @param type Property type: The type of the Simple Authentication and Security Layer (SASL) user.
         *             Valid values:
         *             plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
         *             SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
         *             LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
         *             Default value: plain.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link SaslUserProps#getType}
         * @param type Property type: The type of the Simple Authentication and Security Layer (SASL) user.
         *             Valid values:
         *             plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
         *             SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
         *             LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
         *             Default value: plain.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SaslUserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SaslUserProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SaslUserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SaslUserProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.SaslUserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SaslUserProps.Jsii$Proxy that = (SaslUserProps.Jsii$Proxy) o;

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
