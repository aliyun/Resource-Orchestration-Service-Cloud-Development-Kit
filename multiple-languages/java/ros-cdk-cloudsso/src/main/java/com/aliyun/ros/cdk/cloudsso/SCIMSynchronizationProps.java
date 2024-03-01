package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>SCIMSynchronization</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:50.642Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.SCIMSynchronizationProps")
@software.amazon.jsii.Jsii.Proxy(SCIMSynchronizationProps.Jsii$Proxy.class)
public interface SCIMSynchronizationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property directoryId: The ID of the directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     * Property scimSynchronizationStatus: The status of SCIM synchronization.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Enabled</li>
     * <li>Disabled
     * The default value is Enabled.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScimSynchronizationStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SCIMSynchronizationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SCIMSynchronizationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SCIMSynchronizationProps> {
        java.lang.Object directoryId;
        java.lang.Object scimSynchronizationStatus;

        /**
         * Sets the value of {@link SCIMSynchronizationProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link SCIMSynchronizationProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link SCIMSynchronizationProps#getScimSynchronizationStatus}
         * @param scimSynchronizationStatus Property scimSynchronizationStatus: The status of SCIM synchronization.
         *                                  Valid values:
         *                                  <p>
         *                                  <ul>
         *                                  <li>Enabled</li>
         *                                  <li>Disabled
         *                                  The default value is Enabled.</li>
         *                                  </ul>
         * @return {@code this}
         */
        public Builder scimSynchronizationStatus(java.lang.String scimSynchronizationStatus) {
            this.scimSynchronizationStatus = scimSynchronizationStatus;
            return this;
        }

        /**
         * Sets the value of {@link SCIMSynchronizationProps#getScimSynchronizationStatus}
         * @param scimSynchronizationStatus Property scimSynchronizationStatus: The status of SCIM synchronization.
         *                                  Valid values:
         *                                  <p>
         *                                  <ul>
         *                                  <li>Enabled</li>
         *                                  <li>Disabled
         *                                  The default value is Enabled.</li>
         *                                  </ul>
         * @return {@code this}
         */
        public Builder scimSynchronizationStatus(com.aliyun.ros.cdk.core.IResolvable scimSynchronizationStatus) {
            this.scimSynchronizationStatus = scimSynchronizationStatus;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SCIMSynchronizationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SCIMSynchronizationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SCIMSynchronizationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SCIMSynchronizationProps {
        private final java.lang.Object directoryId;
        private final java.lang.Object scimSynchronizationStatus;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scimSynchronizationStatus = software.amazon.jsii.Kernel.get(this, "scimSynchronizationStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.scimSynchronizationStatus = builder.scimSynchronizationStatus;
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getScimSynchronizationStatus() {
            return this.scimSynchronizationStatus;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            if (this.getScimSynchronizationStatus() != null) {
                data.set("scimSynchronizationStatus", om.valueToTree(this.getScimSynchronizationStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.SCIMSynchronizationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SCIMSynchronizationProps.Jsii$Proxy that = (SCIMSynchronizationProps.Jsii$Proxy) o;

            if (!directoryId.equals(that.directoryId)) return false;
            return this.scimSynchronizationStatus != null ? this.scimSynchronizationStatus.equals(that.scimSynchronizationStatus) : that.scimSynchronizationStatus == null;
        }

        @Override
        public final int hashCode() {
            int result = this.directoryId.hashCode();
            result = 31 * result + (this.scimSynchronizationStatus != null ? this.scimSynchronizationStatus.hashCode() : 0);
            return result;
        }
    }
}
