package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>KeyPair</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.504Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.KeyPairProps")
@software.amazon.jsii.Jsii.Proxy(KeyPairProps.Jsii$Proxy.class)
public interface KeyPairProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property keyPairName: The name of the key pair.
     * <p>
     * You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
     * <p>
     * <ul>
     * <li>*SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.</li>
     * <li>SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.</li>
     * <li><em>SshKey</em>: queries key pairs whose names include SshKey, including the key pair named SshKey.</li>
     * <li>SshKey: queries the key pair named SshKey.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKeyPairName();

    /**
     * @return a {@link Builder} of {@link KeyPairProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link KeyPairProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<KeyPairProps> {
        java.lang.Object keyPairName;

        /**
         * Sets the value of {@link KeyPairProps#getKeyPairName}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         *                    You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
         *                    <p>
         *                    <ul>
         *                    <li>*SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.</li>
         *                    <li>SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.</li>
         *                    <li><em>SshKey</em>: queries key pairs whose names include SshKey, including the key pair named SshKey.</li>
         *                    <li>SshKey: queries the key pair named SshKey.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link KeyPairProps#getKeyPairName}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         *                    You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
         *                    <p>
         *                    <ul>
         *                    <li>*SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.</li>
         *                    <li>SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.</li>
         *                    <li><em>SshKey</em>: queries key pairs whose names include SshKey, including the key pair named SshKey.</li>
         *                    <li>SshKey: queries the key pair named SshKey.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link KeyPairProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public KeyPairProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link KeyPairProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KeyPairProps {
        private final java.lang.Object keyPairName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.keyPairName = java.util.Objects.requireNonNull(builder.keyPairName, "keyPairName is required");
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("keyPairName", om.valueToTree(this.getKeyPairName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.KeyPairProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            KeyPairProps.Jsii$Proxy that = (KeyPairProps.Jsii$Proxy) o;

            return this.keyPairName.equals(that.keyPairName);
        }

        @Override
        public final int hashCode() {
            int result = this.keyPairName.hashCode();
            return result;
        }
    }
}
