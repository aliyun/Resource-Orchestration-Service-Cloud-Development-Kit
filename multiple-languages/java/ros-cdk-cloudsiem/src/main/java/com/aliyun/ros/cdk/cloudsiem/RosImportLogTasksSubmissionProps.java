package com.aliyun.ros.cdk.cloudsiem;

/**
 * Properties for defining a <code>RosImportLogTasksSubmission</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.571Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsiem.$Module.class, fqn = "@alicloud/ros-cdk-cloudsiem.RosImportLogTasksSubmissionProps")
@software.amazon.jsii.Jsii.Proxy(RosImportLogTasksSubmissionProps.Jsii$Proxy.class)
public interface RosImportLogTasksSubmissionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccounts();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCloudCode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogCodes();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProdCode();

    /**
     * @return a {@link Builder} of {@link RosImportLogTasksSubmissionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImportLogTasksSubmissionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImportLogTasksSubmissionProps> {
        java.lang.Object accounts;
        java.lang.Object cloudCode;
        java.lang.Object logCodes;
        java.lang.Object prodCode;

        /**
         * Sets the value of {@link RosImportLogTasksSubmissionProps#getAccounts}
         * @param accounts the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accounts(com.aliyun.ros.cdk.core.IResolvable accounts) {
            this.accounts = accounts;
            return this;
        }

        /**
         * Sets the value of {@link RosImportLogTasksSubmissionProps#getAccounts}
         * @param accounts the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accounts(java.util.List<? extends java.lang.Object> accounts) {
            this.accounts = accounts;
            return this;
        }

        /**
         * Sets the value of {@link RosImportLogTasksSubmissionProps#getCloudCode}
         * @param cloudCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cloudCode(java.lang.String cloudCode) {
            this.cloudCode = cloudCode;
            return this;
        }

        /**
         * Sets the value of {@link RosImportLogTasksSubmissionProps#getCloudCode}
         * @param cloudCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cloudCode(com.aliyun.ros.cdk.core.IResolvable cloudCode) {
            this.cloudCode = cloudCode;
            return this;
        }

        /**
         * Sets the value of {@link RosImportLogTasksSubmissionProps#getLogCodes}
         * @param logCodes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logCodes(com.aliyun.ros.cdk.core.IResolvable logCodes) {
            this.logCodes = logCodes;
            return this;
        }

        /**
         * Sets the value of {@link RosImportLogTasksSubmissionProps#getLogCodes}
         * @param logCodes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logCodes(java.util.List<? extends java.lang.Object> logCodes) {
            this.logCodes = logCodes;
            return this;
        }

        /**
         * Sets the value of {@link RosImportLogTasksSubmissionProps#getProdCode}
         * @param prodCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder prodCode(java.lang.String prodCode) {
            this.prodCode = prodCode;
            return this;
        }

        /**
         * Sets the value of {@link RosImportLogTasksSubmissionProps#getProdCode}
         * @param prodCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder prodCode(com.aliyun.ros.cdk.core.IResolvable prodCode) {
            this.prodCode = prodCode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImportLogTasksSubmissionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImportLogTasksSubmissionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImportLogTasksSubmissionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImportLogTasksSubmissionProps {
        private final java.lang.Object accounts;
        private final java.lang.Object cloudCode;
        private final java.lang.Object logCodes;
        private final java.lang.Object prodCode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accounts = software.amazon.jsii.Kernel.get(this, "accounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudCode = software.amazon.jsii.Kernel.get(this, "cloudCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logCodes = software.amazon.jsii.Kernel.get(this, "logCodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prodCode = software.amazon.jsii.Kernel.get(this, "prodCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accounts = java.util.Objects.requireNonNull(builder.accounts, "accounts is required");
            this.cloudCode = java.util.Objects.requireNonNull(builder.cloudCode, "cloudCode is required");
            this.logCodes = java.util.Objects.requireNonNull(builder.logCodes, "logCodes is required");
            this.prodCode = java.util.Objects.requireNonNull(builder.prodCode, "prodCode is required");
        }

        @Override
        public final java.lang.Object getAccounts() {
            return this.accounts;
        }

        @Override
        public final java.lang.Object getCloudCode() {
            return this.cloudCode;
        }

        @Override
        public final java.lang.Object getLogCodes() {
            return this.logCodes;
        }

        @Override
        public final java.lang.Object getProdCode() {
            return this.prodCode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accounts", om.valueToTree(this.getAccounts()));
            data.set("cloudCode", om.valueToTree(this.getCloudCode()));
            data.set("logCodes", om.valueToTree(this.getLogCodes()));
            data.set("prodCode", om.valueToTree(this.getProdCode()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsiem.RosImportLogTasksSubmissionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImportLogTasksSubmissionProps.Jsii$Proxy that = (RosImportLogTasksSubmissionProps.Jsii$Proxy) o;

            if (!accounts.equals(that.accounts)) return false;
            if (!cloudCode.equals(that.cloudCode)) return false;
            if (!logCodes.equals(that.logCodes)) return false;
            return this.prodCode.equals(that.prodCode);
        }

        @Override
        public final int hashCode() {
            int result = this.accounts.hashCode();
            result = 31 * result + (this.cloudCode.hashCode());
            result = 31 * result + (this.logCodes.hashCode());
            result = 31 * result + (this.prodCode.hashCode());
            return result;
        }
    }
}
