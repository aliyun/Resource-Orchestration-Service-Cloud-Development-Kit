package com.aliyun.ros.cdk.hbr.datasource;

/**
 * Properties for defining a <code>Vaults</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:11.530Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.datasource.VaultsProps")
@software.amazon.jsii.Jsii.Proxy(VaultsProps.Jsii$Proxy.class)
public interface VaultsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property vaultId: VaultId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVaultId() {
        return null;
    }

    /**
     * Property vaultType: Vault type.
     * <p>
     * Value
     * <p>
     * <ul>
     * <li><strong>STANDARD</strong>, which indicates a common backup vault.</li>
     * <li><strong>OTS_BACKUP</strong>, indicating OTS backup vault.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVaultType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VaultsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VaultsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VaultsProps> {
        java.lang.Object refreshOptions;
        java.lang.Object vaultId;
        java.lang.Object vaultType;

        /**
         * Sets the value of {@link VaultsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link VaultsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link VaultsProps#getVaultId}
         * @param vaultId Property vaultId: VaultId.
         * @return {@code this}
         */
        public Builder vaultId(java.lang.String vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link VaultsProps#getVaultId}
         * @param vaultId Property vaultId: VaultId.
         * @return {@code this}
         */
        public Builder vaultId(com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link VaultsProps#getVaultType}
         * @param vaultType Property vaultType: Vault type.
         *                  Value
         *                  <p>
         *                  <ul>
         *                  <li><strong>STANDARD</strong>, which indicates a common backup vault.</li>
         *                  <li><strong>OTS_BACKUP</strong>, indicating OTS backup vault.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder vaultType(java.lang.String vaultType) {
            this.vaultType = vaultType;
            return this;
        }

        /**
         * Sets the value of {@link VaultsProps#getVaultType}
         * @param vaultType Property vaultType: Vault type.
         *                  Value
         *                  <p>
         *                  <ul>
         *                  <li><strong>STANDARD</strong>, which indicates a common backup vault.</li>
         *                  <li><strong>OTS_BACKUP</strong>, indicating OTS backup vault.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder vaultType(com.aliyun.ros.cdk.core.IResolvable vaultType) {
            this.vaultType = vaultType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VaultsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VaultsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VaultsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VaultsProps {
        private final java.lang.Object refreshOptions;
        private final java.lang.Object vaultId;
        private final java.lang.Object vaultType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultId = software.amazon.jsii.Kernel.get(this, "vaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultType = software.amazon.jsii.Kernel.get(this, "vaultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.refreshOptions = builder.refreshOptions;
            this.vaultId = builder.vaultId;
            this.vaultType = builder.vaultType;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getVaultId() {
            return this.vaultId;
        }

        @Override
        public final java.lang.Object getVaultType() {
            return this.vaultType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getVaultId() != null) {
                data.set("vaultId", om.valueToTree(this.getVaultId()));
            }
            if (this.getVaultType() != null) {
                data.set("vaultType", om.valueToTree(this.getVaultType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.datasource.VaultsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VaultsProps.Jsii$Proxy that = (VaultsProps.Jsii$Proxy) o;

            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.vaultId != null ? !this.vaultId.equals(that.vaultId) : that.vaultId != null) return false;
            return this.vaultType != null ? this.vaultType.equals(that.vaultType) : that.vaultType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.refreshOptions != null ? this.refreshOptions.hashCode() : 0;
            result = 31 * result + (this.vaultId != null ? this.vaultId.hashCode() : 0);
            result = 31 * result + (this.vaultType != null ? this.vaultType.hashCode() : 0);
            return result;
        }
    }
}
