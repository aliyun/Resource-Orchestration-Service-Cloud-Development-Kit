package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>RosAudit</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:33.744Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosAuditProps")
@software.amazon.jsii.Jsii.Proxy(RosAuditProps.Jsii$Proxy.class)
public interface RosAuditProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVariableMap();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAccount() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAuditProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAuditProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAuditProps> {
        java.lang.Object displayName;
        java.lang.Object variableMap;
        java.lang.Object multiAccount;

        /**
         * Sets the value of {@link RosAuditProps#getDisplayName}
         * @param displayName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosAuditProps#getDisplayName}
         * @param displayName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosAuditProps#getVariableMap}
         * @param variableMap the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder variableMap(com.aliyun.ros.cdk.core.IResolvable variableMap) {
            this.variableMap = variableMap;
            return this;
        }

        /**
         * Sets the value of {@link RosAuditProps#getVariableMap}
         * @param variableMap the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder variableMap(com.aliyun.ros.cdk.sls.RosAudit.VariableMapProperty variableMap) {
            this.variableMap = variableMap;
            return this;
        }

        /**
         * Sets the value of {@link RosAuditProps#getMultiAccount}
         * @param multiAccount the value to be set.
         * @return {@code this}
         */
        public Builder multiAccount(com.aliyun.ros.cdk.core.IResolvable multiAccount) {
            this.multiAccount = multiAccount;
            return this;
        }

        /**
         * Sets the value of {@link RosAuditProps#getMultiAccount}
         * @param multiAccount the value to be set.
         * @return {@code this}
         */
        public Builder multiAccount(java.util.List<? extends java.lang.Object> multiAccount) {
            this.multiAccount = multiAccount;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAuditProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAuditProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAuditProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAuditProps {
        private final java.lang.Object displayName;
        private final java.lang.Object variableMap;
        private final java.lang.Object multiAccount;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.variableMap = software.amazon.jsii.Kernel.get(this, "variableMap", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAccount = software.amazon.jsii.Kernel.get(this, "multiAccount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
            this.variableMap = java.util.Objects.requireNonNull(builder.variableMap, "variableMap is required");
            this.multiAccount = builder.multiAccount;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getVariableMap() {
            return this.variableMap;
        }

        @Override
        public final java.lang.Object getMultiAccount() {
            return this.multiAccount;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("displayName", om.valueToTree(this.getDisplayName()));
            data.set("variableMap", om.valueToTree(this.getVariableMap()));
            if (this.getMultiAccount() != null) {
                data.set("multiAccount", om.valueToTree(this.getMultiAccount()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosAuditProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAuditProps.Jsii$Proxy that = (RosAuditProps.Jsii$Proxy) o;

            if (!displayName.equals(that.displayName)) return false;
            if (!variableMap.equals(that.variableMap)) return false;
            return this.multiAccount != null ? this.multiAccount.equals(that.multiAccount) : that.multiAccount == null;
        }

        @Override
        public final int hashCode() {
            int result = this.displayName.hashCode();
            result = 31 * result + (this.variableMap.hashCode());
            result = 31 * result + (this.multiAccount != null ? this.multiAccount.hashCode() : 0);
            return result;
        }
    }
}
