package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>SCIMServerCredential</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.939Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.SCIMServerCredentialProps")
@software.amazon.jsii.Jsii.Proxy(SCIMServerCredentialProps.Jsii$Proxy.class)
public interface SCIMServerCredentialProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property directoryId: The ID of the directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     * Property status: The new status of the SCIM credential.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Enabled: The SCIM credential is enabled.</li>
     * <li>Disabled: The SCIM credential is disabled.
     * The default value is Enabled.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SCIMServerCredentialProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SCIMServerCredentialProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SCIMServerCredentialProps> {
        java.lang.Object directoryId;
        java.lang.Object status;

        /**
         * Sets the value of {@link SCIMServerCredentialProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link SCIMServerCredentialProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link SCIMServerCredentialProps#getStatus}
         * @param status Property status: The new status of the SCIM credential.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Enabled: The SCIM credential is enabled.</li>
         *               <li>Disabled: The SCIM credential is disabled.
         *               The default value is Enabled.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link SCIMServerCredentialProps#getStatus}
         * @param status Property status: The new status of the SCIM credential.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li>Enabled: The SCIM credential is enabled.</li>
         *               <li>Disabled: The SCIM credential is disabled.
         *               The default value is Enabled.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SCIMServerCredentialProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SCIMServerCredentialProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SCIMServerCredentialProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SCIMServerCredentialProps {
        private final java.lang.Object directoryId;
        private final java.lang.Object status;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.status = builder.status;
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.SCIMServerCredentialProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SCIMServerCredentialProps.Jsii$Proxy that = (SCIMServerCredentialProps.Jsii$Proxy) o;

            if (!directoryId.equals(that.directoryId)) return false;
            return this.status != null ? this.status.equals(that.status) : that.status == null;
        }

        @Override
        public final int hashCode() {
            int result = this.directoryId.hashCode();
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            return result;
        }
    }
}
