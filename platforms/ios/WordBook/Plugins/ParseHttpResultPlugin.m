//
//  ParseHttpResultPlugin.m
//  HelloCordova
//
//  Created by msp on 16/1/8.
//
//

#import "ParseHttpResultPlugin.h"
#import "Global.h"

@implementation ParseHttpResultPlugin

- (void)parseData:(CDVInvokedUrlCommand*)commard
{
    NSDictionary * dic = commard.arguments[0];
    NSLog(@"%@",[Global convertUnicodeToUTF8:[dic description]]);
}

@end
