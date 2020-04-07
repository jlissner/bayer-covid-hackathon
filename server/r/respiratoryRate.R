############################################
#### Team Pandemirus COVID-19 Hackathon ####
############################################
### Simulate Respiratory Rate Graph for ####
### Healthy Patient v COVID-19 Patient  ####
############################################
### respiratoryRate.R                   ####
############################################

fn_respiratoryRate <- function(){

# load required package
library(ggplot2)

# Trig Time!

# Healthy response time sequence will have
# 10 measurements, so that means
# 10 * 2pi is the domain

# Create the sequence of points for times t
healthy_resp_time  <- seq(0,10 * pi*2,0.01)

# Create a function of the respiratory rates
# [1 + sin(t + sin(t/2))]/2
# the 1 will shift the graph up, scaling from 0 to 2, instead of -1 to 1
# the sin(t/2) will emphasize exhaling is faster at first and slows in a breath
# dividing by 2 scales from 0 to 1
healthy_resp_rate <- (1+sin(healthy_resp_time + sin(healthy_resp_time)/2))/2

# The healthy rate is about 12 - 20 breaths a minute
# I need to rescale the x-axis
healthy_resp_time <- healthy_resp_time/2

if(FALSE){
# Plot healthy respiratory patient rates
# x = time in seconds
# y = respiratory rate
plot(healthy_resp_time, healthy_resp_rate)
}

### Create a respiratory rate pattern for an infected patient

# time pattern
covid_resp_time <- seq(0, 10*pi*2, 0.01)

# Prior time for faster breaths, less efficiency, has instability
covid_resp_rate <- (1+sin(covid_resp_time*.75 + sin(covid_resp_time*.7)/1.2))/2.5

# Transform time stamps
covid_resp_time <- covid_resp_time/2*0.6

if(FALSE){
# plot example
plot(covid_resp_time, covid_resp_rate)
}

# Create a dataset with both healhty and infected patient data
covid_resp_df <- data.frame(rbind(cbind(healthy_resp_time,healthy_resp_rate,"Healthy"),
                       cbind(covid_resp_time,covid_resp_rate,"COVID-19")))
colnames(covid_resp_df) <- c("Time", "respiratoryRate","Diagnosis")
covid_resp_df$Time <- as.numeric(as.character(covid_resp_df$Time))
covid_resp_df$respiratoryRate <- as.numeric(as.character(covid_resp_df$respiratoryRate))

# Plot the first 15 seconds
covid_resp_df <- covid_resp_df[which(covid_resp_df$Time < 15),]

if(FALSE){
# Graph
ggplot(covid_resp_df, aes(x = Time, y = respiratoryRate, group = Diagnosis,
                         colour = Diagnosis)) +
  geom_point(size =0 ) + geom_line() +
  ylim(floor(min(covid_resp_df$respiratoryRate)/1)*1, ceiling(max(covid_resp_df$respiratoryRate)/1)*1) +
  xlim(0,ceiling(max(covid_resp_df$Time)/1)*1)
}

return(covid_resp_df)
}

fn_respiratoryRate()
