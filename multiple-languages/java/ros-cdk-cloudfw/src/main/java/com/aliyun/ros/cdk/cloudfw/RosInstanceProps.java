package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>RosInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:30.935Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclExtension() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreExisting() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogAnalysis() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAccountManagement() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatFirewallNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcFirewallNum() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceProps> {
        java.lang.Object payType;
        java.lang.Object accountNum;
        java.lang.Object aclExtension;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object bandwidth;
        java.lang.Object ignoreExisting;
        java.lang.Object ipNum;
        java.lang.Object logAnalysis;
        java.lang.Object logStorage;
        java.lang.Object multiAccountManagement;
        java.lang.Object natBandwidth;
        java.lang.Object natFirewallNum;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object spec;
        java.lang.Object vpcBandwidth;
        java.lang.Object vpcFirewallNum;

        /**
         * Sets the value of {@link RosInstanceProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAccountNum}
         * @param accountNum the value to be set.
         * @return {@code this}
         */
        public Builder accountNum(java.lang.Number accountNum) {
            this.accountNum = accountNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAccountNum}
         * @param accountNum the value to be set.
         * @return {@code this}
         */
        public Builder accountNum(com.aliyun.ros.cdk.core.IResolvable accountNum) {
            this.accountNum = accountNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAclExtension}
         * @param aclExtension the value to be set.
         * @return {@code this}
         */
        public Builder aclExtension(java.lang.Number aclExtension) {
            this.aclExtension = aclExtension;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAclExtension}
         * @param aclExtension the value to be set.
         * @return {@code this}
         */
        public Builder aclExtension(com.aliyun.ros.cdk.core.IResolvable aclExtension) {
            this.aclExtension = aclExtension;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getBandwidth}
         * @param bandwidth the value to be set.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getBandwidth}
         * @param bandwidth the value to be set.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getIgnoreExisting}
         * @param ignoreExisting the value to be set.
         * @return {@code this}
         */
        public Builder ignoreExisting(java.lang.Boolean ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getIgnoreExisting}
         * @param ignoreExisting the value to be set.
         * @return {@code this}
         */
        public Builder ignoreExisting(com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.ignoreExisting = ignoreExisting;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getIpNum}
         * @param ipNum the value to be set.
         * @return {@code this}
         */
        public Builder ipNum(java.lang.Number ipNum) {
            this.ipNum = ipNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getIpNum}
         * @param ipNum the value to be set.
         * @return {@code this}
         */
        public Builder ipNum(com.aliyun.ros.cdk.core.IResolvable ipNum) {
            this.ipNum = ipNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogAnalysis}
         * @param logAnalysis the value to be set.
         * @return {@code this}
         */
        public Builder logAnalysis(java.lang.Boolean logAnalysis) {
            this.logAnalysis = logAnalysis;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogAnalysis}
         * @param logAnalysis the value to be set.
         * @return {@code this}
         */
        public Builder logAnalysis(com.aliyun.ros.cdk.core.IResolvable logAnalysis) {
            this.logAnalysis = logAnalysis;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogStorage}
         * @param logStorage the value to be set.
         * @return {@code this}
         */
        public Builder logStorage(java.lang.Number logStorage) {
            this.logStorage = logStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getLogStorage}
         * @param logStorage the value to be set.
         * @return {@code this}
         */
        public Builder logStorage(com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.logStorage = logStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMultiAccountManagement}
         * @param multiAccountManagement the value to be set.
         * @return {@code this}
         */
        public Builder multiAccountManagement(java.lang.Boolean multiAccountManagement) {
            this.multiAccountManagement = multiAccountManagement;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMultiAccountManagement}
         * @param multiAccountManagement the value to be set.
         * @return {@code this}
         */
        public Builder multiAccountManagement(com.aliyun.ros.cdk.core.IResolvable multiAccountManagement) {
            this.multiAccountManagement = multiAccountManagement;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getNatBandwidth}
         * @param natBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder natBandwidth(java.lang.Number natBandwidth) {
            this.natBandwidth = natBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getNatBandwidth}
         * @param natBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder natBandwidth(com.aliyun.ros.cdk.core.IResolvable natBandwidth) {
            this.natBandwidth = natBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getNatFirewallNum}
         * @param natFirewallNum the value to be set.
         * @return {@code this}
         */
        public Builder natFirewallNum(java.lang.Number natFirewallNum) {
            this.natFirewallNum = natFirewallNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getNatFirewallNum}
         * @param natFirewallNum the value to be set.
         * @return {@code this}
         */
        public Builder natFirewallNum(com.aliyun.ros.cdk.core.IResolvable natFirewallNum) {
            this.natFirewallNum = natFirewallNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSpec}
         * @param spec the value to be set.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSpec}
         * @param spec the value to be set.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcBandwidth}
         * @param vpcBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder vpcBandwidth(java.lang.Number vpcBandwidth) {
            this.vpcBandwidth = vpcBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcBandwidth}
         * @param vpcBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder vpcBandwidth(com.aliyun.ros.cdk.core.IResolvable vpcBandwidth) {
            this.vpcBandwidth = vpcBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcFirewallNum}
         * @param vpcFirewallNum the value to be set.
         * @return {@code this}
         */
        public Builder vpcFirewallNum(java.lang.Number vpcFirewallNum) {
            this.vpcFirewallNum = vpcFirewallNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getVpcFirewallNum}
         * @param vpcFirewallNum the value to be set.
         * @return {@code this}
         */
        public Builder vpcFirewallNum(com.aliyun.ros.cdk.core.IResolvable vpcFirewallNum) {
            this.vpcFirewallNum = vpcFirewallNum;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object payType;
        private final java.lang.Object accountNum;
        private final java.lang.Object aclExtension;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object bandwidth;
        private final java.lang.Object ignoreExisting;
        private final java.lang.Object ipNum;
        private final java.lang.Object logAnalysis;
        private final java.lang.Object logStorage;
        private final java.lang.Object multiAccountManagement;
        private final java.lang.Object natBandwidth;
        private final java.lang.Object natFirewallNum;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object spec;
        private final java.lang.Object vpcBandwidth;
        private final java.lang.Object vpcFirewallNum;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountNum = software.amazon.jsii.Kernel.get(this, "accountNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclExtension = software.amazon.jsii.Kernel.get(this, "aclExtension", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ignoreExisting = software.amazon.jsii.Kernel.get(this, "ignoreExisting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipNum = software.amazon.jsii.Kernel.get(this, "ipNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logAnalysis = software.amazon.jsii.Kernel.get(this, "logAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logStorage = software.amazon.jsii.Kernel.get(this, "logStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAccountManagement = software.amazon.jsii.Kernel.get(this, "multiAccountManagement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natBandwidth = software.amazon.jsii.Kernel.get(this, "natBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natFirewallNum = software.amazon.jsii.Kernel.get(this, "natFirewallNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcBandwidth = software.amazon.jsii.Kernel.get(this, "vpcBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcFirewallNum = software.amazon.jsii.Kernel.get(this, "vpcFirewallNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.accountNum = builder.accountNum;
            this.aclExtension = builder.aclExtension;
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.bandwidth = builder.bandwidth;
            this.ignoreExisting = builder.ignoreExisting;
            this.ipNum = builder.ipNum;
            this.logAnalysis = builder.logAnalysis;
            this.logStorage = builder.logStorage;
            this.multiAccountManagement = builder.multiAccountManagement;
            this.natBandwidth = builder.natBandwidth;
            this.natFirewallNum = builder.natFirewallNum;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.spec = builder.spec;
            this.vpcBandwidth = builder.vpcBandwidth;
            this.vpcFirewallNum = builder.vpcFirewallNum;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getAccountNum() {
            return this.accountNum;
        }

        @Override
        public final java.lang.Object getAclExtension() {
            return this.aclExtension;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getIgnoreExisting() {
            return this.ignoreExisting;
        }

        @Override
        public final java.lang.Object getIpNum() {
            return this.ipNum;
        }

        @Override
        public final java.lang.Object getLogAnalysis() {
            return this.logAnalysis;
        }

        @Override
        public final java.lang.Object getLogStorage() {
            return this.logStorage;
        }

        @Override
        public final java.lang.Object getMultiAccountManagement() {
            return this.multiAccountManagement;
        }

        @Override
        public final java.lang.Object getNatBandwidth() {
            return this.natBandwidth;
        }

        @Override
        public final java.lang.Object getNatFirewallNum() {
            return this.natFirewallNum;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        public final java.lang.Object getVpcBandwidth() {
            return this.vpcBandwidth;
        }

        @Override
        public final java.lang.Object getVpcFirewallNum() {
            return this.vpcFirewallNum;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("payType", om.valueToTree(this.getPayType()));
            if (this.getAccountNum() != null) {
                data.set("accountNum", om.valueToTree(this.getAccountNum()));
            }
            if (this.getAclExtension() != null) {
                data.set("aclExtension", om.valueToTree(this.getAclExtension()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getIgnoreExisting() != null) {
                data.set("ignoreExisting", om.valueToTree(this.getIgnoreExisting()));
            }
            if (this.getIpNum() != null) {
                data.set("ipNum", om.valueToTree(this.getIpNum()));
            }
            if (this.getLogAnalysis() != null) {
                data.set("logAnalysis", om.valueToTree(this.getLogAnalysis()));
            }
            if (this.getLogStorage() != null) {
                data.set("logStorage", om.valueToTree(this.getLogStorage()));
            }
            if (this.getMultiAccountManagement() != null) {
                data.set("multiAccountManagement", om.valueToTree(this.getMultiAccountManagement()));
            }
            if (this.getNatBandwidth() != null) {
                data.set("natBandwidth", om.valueToTree(this.getNatBandwidth()));
            }
            if (this.getNatFirewallNum() != null) {
                data.set("natFirewallNum", om.valueToTree(this.getNatFirewallNum()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getSpec() != null) {
                data.set("spec", om.valueToTree(this.getSpec()));
            }
            if (this.getVpcBandwidth() != null) {
                data.set("vpcBandwidth", om.valueToTree(this.getVpcBandwidth()));
            }
            if (this.getVpcFirewallNum() != null) {
                data.set("vpcFirewallNum", om.valueToTree(this.getVpcFirewallNum()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceProps.Jsii$Proxy that = (RosInstanceProps.Jsii$Proxy) o;

            if (!payType.equals(that.payType)) return false;
            if (this.accountNum != null ? !this.accountNum.equals(that.accountNum) : that.accountNum != null) return false;
            if (this.aclExtension != null ? !this.aclExtension.equals(that.aclExtension) : that.aclExtension != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.ignoreExisting != null ? !this.ignoreExisting.equals(that.ignoreExisting) : that.ignoreExisting != null) return false;
            if (this.ipNum != null ? !this.ipNum.equals(that.ipNum) : that.ipNum != null) return false;
            if (this.logAnalysis != null ? !this.logAnalysis.equals(that.logAnalysis) : that.logAnalysis != null) return false;
            if (this.logStorage != null ? !this.logStorage.equals(that.logStorage) : that.logStorage != null) return false;
            if (this.multiAccountManagement != null ? !this.multiAccountManagement.equals(that.multiAccountManagement) : that.multiAccountManagement != null) return false;
            if (this.natBandwidth != null ? !this.natBandwidth.equals(that.natBandwidth) : that.natBandwidth != null) return false;
            if (this.natFirewallNum != null ? !this.natFirewallNum.equals(that.natFirewallNum) : that.natFirewallNum != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.spec != null ? !this.spec.equals(that.spec) : that.spec != null) return false;
            if (this.vpcBandwidth != null ? !this.vpcBandwidth.equals(that.vpcBandwidth) : that.vpcBandwidth != null) return false;
            return this.vpcFirewallNum != null ? this.vpcFirewallNum.equals(that.vpcFirewallNum) : that.vpcFirewallNum == null;
        }

        @Override
        public final int hashCode() {
            int result = this.payType.hashCode();
            result = 31 * result + (this.accountNum != null ? this.accountNum.hashCode() : 0);
            result = 31 * result + (this.aclExtension != null ? this.aclExtension.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.ignoreExisting != null ? this.ignoreExisting.hashCode() : 0);
            result = 31 * result + (this.ipNum != null ? this.ipNum.hashCode() : 0);
            result = 31 * result + (this.logAnalysis != null ? this.logAnalysis.hashCode() : 0);
            result = 31 * result + (this.logStorage != null ? this.logStorage.hashCode() : 0);
            result = 31 * result + (this.multiAccountManagement != null ? this.multiAccountManagement.hashCode() : 0);
            result = 31 * result + (this.natBandwidth != null ? this.natBandwidth.hashCode() : 0);
            result = 31 * result + (this.natFirewallNum != null ? this.natFirewallNum.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            result = 31 * result + (this.vpcBandwidth != null ? this.vpcBandwidth.hashCode() : 0);
            result = 31 * result + (this.vpcFirewallNum != null ? this.vpcFirewallNum.hashCode() : 0);
            return result;
        }
    }
}
